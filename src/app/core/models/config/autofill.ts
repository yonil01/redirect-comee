import { Attribute } from '@app/core/models';
export interface Autofill {
  id?: string;
  name?: string;
  description?: string;
  outside?: boolean;
  process?: string;
  entities_id?: string;
}

export interface AutofillValue {
  id?: number;
  code?: number;
  sequence?: number;
  value?: string;
  description?: string;
}

export interface AttributeAutofill {
  id?: string;
  autofills_id?: string;
  attributes_id?: string;
  sequence?: number;
}

export interface AttributeAutofillResponse {
  id?: string;
  autofills?: Autofill;
  attribute?: Attribute;
  sequence?: number;
}

export interface AutofillsValues {
  autofill_id?: string;
  autofill_values?: any;
}
