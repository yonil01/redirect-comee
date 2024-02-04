import {RuleParam} from "@app/core/models";
import {AttributeValues} from "@app/core/models/report/report";
import {HookState} from "@app/core/store/reducers";
import {DataSetModel} from "@app/modules/form/models/models";

export interface ResponseAttributeAutofillDf {
  autofill_related_id: string;
  autofill_response: AutofillResponseDf[];
}

export interface ResponseCascadingDatasetDf {
  cascading_related_id: string;
  cascading_response: CascadingResponseDf[];
}

export interface CascadingResponseDf {
  attribute: EntityDf;
  entity: EntityDf;
  data_cascading: DataSetModel[];
}

export interface AutofillResponseDf {
  attributes: AttributeValues[];
  entity: EntityDf;
}

interface EntityDf {
  id: string;
  name: string;
}

export interface ParamsRuleExecuteDf {
  stateHook: HookState;
  params?: RuleParam[];
  autofill?: ResponseAttributeAutofillDf;
  cascading_dataset?: ResponseCascadingDatasetDf;
  discard_attributes_of_autofill?: string[];
}
