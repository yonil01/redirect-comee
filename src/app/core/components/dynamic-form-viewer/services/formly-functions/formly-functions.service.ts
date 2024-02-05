import {Injectable} from '@angular/core';
import {Formly, FunctionsDefinition} from '../../models/index';
import {GraphqlService} from '../graphql/graphql.service';
import {Attribute} from "../../../../models";

@Injectable({
  providedIn: 'root',
})
export class FormlyFunctionsService {
  public value: string = '';

  constructor(private graphqlService: GraphqlService) {
  }

  getJsonFormParse(jsonForm: Formly[], documentId: string): Formly[] {
    const jsonString = JSON.stringify(jsonForm);
    return JSON.parse(jsonString, (key, value) => {
      if (typeof value === 'string' && value.indexOf('def=') === 0) {
        const valueSplit = value.split('=');
        return this.getFunctionByValue(valueSplit[1]);
      } else if (typeof value === 'string' && value.indexOf('v_document_id') === 0) {
        return documentId;
      } else {
        return value;
      }
    });
  }

  getFunctionByValue(value: string): Function {
    const functionList: Function[] = [];
    const functionListVal: Function[] = [];
    const functionsDefinition: FunctionsDefinition = JSON.parse(value);
    const functions: any = {
      f_: () => {
      },
      f_dataset: (field: any, functionsDef: FunctionsDefinition) => {
        if (functionsDefinition.attribute) {
          this.graphqlService
            .getDatasetsValues(functionsDef.attribute?.entities_attributes_dataset?.id?.toLocaleLowerCase() || '')
            .subscribe((res) => {
              field.templateOptions.options = res.data.map((dt: any) => ({
                label: dt.description,
                value: dt.value,
              }));
            });
        } else {
          field.templateOptions.options = [];
        }
      },
      f_cascading_dataset: (field: any, functionsDef: FunctionsDefinition) => {
        if (functionsDefinition.attribute) {
          const cascadingDatasetId = functionsDef.attribute?.entities_attributes_cascading_dataset?.cascading_dataset?.id?.toLocaleLowerCase();
          const attributeId = functionsDef.attribute?.id;
          let attributeIdValue = '';
          let val = '';
          const attributeName = functionsDef.attribute?.name;
          const sequence = functionsDef.attribute?.entities_attributes_cascading_dataset?.sequence || 0;
          if (sequence === 1) {
            this.graphqlService
              .getCascadingDatasetValueByIdAttribute(
                cascadingDatasetId || '',
                attributeId?.toLocaleLowerCase() || '',
                attributeIdValue,
                val,
              )
              .subscribe((res) => {
                if (!res.error) {
                  field.templateOptions.options = res.data.cascading_dataset_response
                    ? res.data.cascading_dataset_response.map((dt: any) => ({
                      label: dt[attributeName || ''],
                      value: dt['code_' + attributeName],
                    }))
                    : [];
                }
              });
          } else if (sequence > 1 && sequence) {
            const fieldBefore = functionsDef.entity?.attributes?.find((a: any) => a.entities_attributes_cascading_dataset?.sequence === sequence - 1);
            field.form.get(fieldBefore?.id).statusChanges.subscribe((valu: any) => {
              if (valu) {
                attributeIdValue = fieldBefore?.id?.toLowerCase() || '';
                val = valu;
                this.graphqlService
                  .getCascadingDatasetValueByIdAttribute(
                    cascadingDatasetId || '',
                    attributeId?.toLocaleLowerCase() || '',
                    attributeIdValue,
                    val,
                  )
                  .subscribe((res) => {
                    if (!res.error && res.data.cascading_dataset_response) {
                      field.templateOptions.options = res.data.cascading_dataset_response
                        ? res.data.cascading_dataset_response.map((dt: any) => ({
                          label: dt[attributeName || ''],
                          value: dt['code_' + attributeName],
                        }))
                        : [];
                    } else {
                      field.templateOptions.options = [];
                    }
                  });
              } else {
                field.templateOptions.options = [];
              }
              field.form.get(attributeId).reset();
            });
          }
        } else {
          field.templateOptions.options = [];
        }
      },
      f_autofill: (field: any, functionsDef: FunctionsDefinition) => {
        if (functionsDef.attribute && functionsDef.entity) {
          field.form.get(functionsDef.attribute.id).valueChanges.subscribe(() => {
            if (field.form.get(functionsDef.attribute?.id).pristine) {
              return;
            }
            const fieldsSearchAtt: Attribute[] = functionsDef.entity?.attributes?.filter((att: any) => att.entities_attributes_autofills?.is_search) || [];
            const fieldsSearch: string[] = fieldsSearchAtt.map((att) => att.id || '') || [];

            const fieldsAutofillAtt: Attribute[] = functionsDef.entity?.attributes?.filter((att: any) => att.entities_attributes_autofills && !att.entities_attributes_autofills.is_search) || [];
            const fieldsAutofill: string[] = fieldsAutofillAtt.map((att) => att.id || '') || [];
            const dates: any = {};
            let isDates = true;

            for (const fs of fieldsSearchAtt) {
              dates[fs.name || ''] = field.form.get(fs.id).value;
              if (dates[fs.name || ''] === null) {
                isDates = false;
              }
            }

            if (!isDates) {
              return;
            }
            this.graphqlService
              .getAutofillByValue(
                functionsDef.attribute?.entities_attributes_autofills?.autofills?.id?.toLowerCase() || '',
                functionsDef.entity?.id?.toLowerCase() || '',
                dates,
              )
              .subscribe((res) => {
                if (!res.error && res.data.autofill_response && res.data.autofill_response.length) {
                  if (functionsDef.entity?.is_unique) {
                    const autofillValue = JSON.parse(JSON.stringify(res.data.autofill_response[0]));
                    delete autofillValue.created_at;
                    delete autofillValue.updated_at;
                    delete autofillValue.id;
                    for (const fd of fieldsSearch) {
                      delete autofillValue[fd];
                    }
                    for (const keyField of Object.keys(autofillValue)) {
                      field.form.get(keyField).setValue(autofillValue[keyField]);
                    }
                  } else {
                    const someRow = field.model[functionsDef.entity?.id || ''].find((v: any) => {
                      for (const fs of fieldsSearchAtt) {
                        if (v[fs.id || ''] !== dates[fs.name || '']) {
                          return false;
                        }
                      }
                      return true;
                    });
                    if (!someRow) {
                      let autofillValues = JSON.parse(JSON.stringify(res.data.autofill_response));
                      autofillValues = autofillValues.map((av: any) => {
                        delete av.created_at;
                        delete av.updated_at;
                        delete av.id;
                        return av;
                      });
                      field.model[functionsDef.entity?.id || ''] = [...field.model[functionsDef.entity?.id || ''], ...autofillValues];
                    }
                  }
                } else {
                  if (functionsDef.entity?.is_unique) {
                    for (const fs of fieldsAutofill) {
                      field.form.get(fs).reset();
                    }
                  } else {
                    // TODO: implementacion de eliminacion registros entidad multiple
                  }
                }
              });
          });
        }
      },
      f_hidden_fields: (field: any) => {
        // field.hideExpression = 'true';
      },
      f_val_min: () => {
        return `El dato debe ser mayor o igual a `;
      },
      f_val_max: () => {
        return `El dato debe ser menor o igual a `;
      },
    };
    if (functionsDefinition.functions) {
      for (const fun of functionsDefinition.functions) {
        // if(fun.indexOf('f_val') === 0) {
        //   functionListVal.push();
        // }
        functionList.push(functions[fun]);
      }
    }

    return (field: any) => {
      for (const func of functionList) {
        func(field, functionsDefinition);
      }
    };
  }
}
