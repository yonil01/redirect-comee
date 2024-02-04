import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityValue } from '../../models';
import {
  GetAutofillByValueQuery,
  GetCascadingDatasetValueByIdAttributeQuery,
  GetDatasetsValuesQuery,
  GetDocumentByIDQuery,
  GetFirstFileByDocumentIDQuery,
  UpdateEntityToDocumentquery,
  NewEntityToDocumentQuery,
  DeleteEntityToDocumentQuery,
  CreateDocumentQuery,
} from './graphql.query.service';

interface Response<T = any> {
  error: boolean;
  data: T;
  code: number;
  msg: string;
  type: string;
  token?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(
    private getFirstFileByDocumentIDQuery: GetFirstFileByDocumentIDQuery,
    private getDocumentByIDQuery: GetDocumentByIDQuery,
    private getDatasetsValuesQuery: GetDatasetsValuesQuery,
    private getCascadingDatasetValueByIdAttributeQuery: GetCascadingDatasetValueByIdAttributeQuery,
    private getAutofillByValueQuery: GetAutofillByValueQuery,
    private updateEntityToDocumentQuery: UpdateEntityToDocumentquery,
    private newEntityToDocumentQuery: NewEntityToDocumentQuery,
    private deleteEntityToDocumentQuery: DeleteEntityToDocumentQuery,
    private createDocumentQuery: CreateDocumentQuery,
  ) {}

  getFirstFileByDocumentID(id: string): Observable<Response> {
    return this.getFirstFileByDocumentIDQuery
      .watch({
        id: id,
      })
      .valueChanges.pipe(map(({ data }: any) => data?.getFirstFileByDocumentID));
  }

  getDocumentByID(id: string): Observable<Response> {
    return this.getDocumentByIDQuery
      .watch({
        id: id,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getDocumentByID));
  }

  getDatasetsValues(id: string): Observable<Response> {
    return this.getDatasetsValuesQuery
      .watch({ id: id })
      .valueChanges.pipe(map(({ data }: any) => data.getDatasetsValues));
  }

  getCascadingDatasetValueByIdAttribute(
    cascading_dataset_id: string,
    attribute_id: string,
    attribute_id_value: string,
    value: string,
  ): Observable<Response> {
    return this.getCascadingDatasetValueByIdAttributeQuery
      .watch({
        cascading_dataset_id: cascading_dataset_id,
        attribute_id: attribute_id,
        attribute_id_value: attribute_id_value,
        value: value,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getCascadingDatasetValueByIdAttribute));
  }

  getAutofillByValue(autofill_id: string, entity_id: string, dataParam: any): Observable<Response> {
    return this.getAutofillByValueQuery
      .watch({ autofill_id: autofill_id, entity_id: entity_id, data: dataParam })
      .valueChanges.pipe(map(({ data }: any) => data.getAutofillByValue));
  }

  updateEntityToDocument(entityValue: EntityValue[], documentId: string): Observable<Response> {
    return this.updateEntityToDocumentQuery
      .mutate({
        requestUpdateEntitiesValues: {
          data: {
            entities: entityValue,
            document_id: documentId,
          },
        },
      })
      .pipe(map(({ data }: any) => data.updateEntityToDocument));
  }

  NewEntityToDocument(entityValue: EntityValue[], documentId: string): Observable<Response> {
    return this.newEntityToDocumentQuery
      .mutate({
        requestNewEntitiesValues: {
          data: {
            entities: entityValue,
            document_id: documentId,
          },
        },
      })
      .pipe(map(({ data }: any) => data.NewEntityToDocument));
  }

  deleteEntityToDocument(entities: any[], documentId: string): Observable<Response> {
    return this.deleteEntityToDocumentQuery
      .mutate({
        request: {
          data: {
            entities: entities,
            document_id: documentId,
          },
        },
      })
      .pipe(map(({ data }: any) => data.deleteEntityToDocument));
  }
}
