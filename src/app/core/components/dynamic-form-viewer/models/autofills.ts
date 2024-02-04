import {Attribute} from "@app/core/models";

export interface Autofills {
  id: string;
  name: string;
  description: string;
  outside: boolean;
  process: string;
  created_at: string;
  updated_at: string;
}

export interface AutofillValue {
  id?: number;
  code?: number;
  sequence?: number;
  value?: string;
  description?: string;
}

export interface AttributeAutofill {
  id: string;
  autofills?: Autofills;
  attribute?: Attribute;
  sequence: number;
  is_search: boolean;
  created_at: string;
  updated_at: string;
}

// export interface AttributeAutofillResponse {
//   id?: string;
//   autofills?: Autofill;
//   attribute?: Attribute;
//   sequence?: number;
// }

export interface AutofillsValues {
  autofill_id?: string;
  autofill_values?: any;
}
