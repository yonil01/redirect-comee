import {Project, Dataset} from "../index";
import {AttributeAutofill} from "../../components/dynamic-form-viewer/models";

export interface Entities {
  id: string;
  name: string;
  description: string;
  project: Project;
  is_unique: boolean;
  attributes: Attribute[];
  created_at: string;
  updated_at: string;
}

export interface Attribute {
  id: string;
  name: string;
  description: string;
  tag_html: string;
  type: string;
  mask: string;
  min_length: number;
  max_length: number;
  validation: string;
  field_types: string;
  dataset: boolean;
  is_cipher: boolean;
  required: boolean;
  hidden: boolean;
  disabled: boolean;
  entities_id: string;
  is_index: boolean;
  sequence: number;
  entities_attributes_autofills?: AttributeAutofill;
  entities_attributes_cascading_dataset?: AttributeCascadingDataset;
  entities_attributes_dataset?: Dataset;
  regex?: string;
  created_at: string;
  updated_at: string;
}

export interface AttributeCascadingDataset {
  id: string;
  cascading_dataset?: CascadingDatasets;
  attribute?: Attribute;
  sequence: number;
  created_at: string;
  updated_at: string;
}

export interface CascadingDatasets {
  id: string;
  name: string;
  description: string;
  outside: boolean;
  process: string;
  entities_id: string;
}

export interface AttributeDataset {
  id?: string;
  dataset_id?: string;
  attributes_id?: string;
}

export interface CascadingDataset {
  name?: string;
  description?: string;
}
