import {DocType, Entities} from "../../../models";

export interface Document {
  id?: string;
  doctype_id?: string;
  auto_name?: string;
  doctype?: DocType;
  original_file?: string;
  user_creation?: string;
  user_delete?: string;
  batch?: string;
  status?: number;
  versions?: Version[];
  entities?: EntityValue[];
  locked?: boolean;
  file?: File;
  file_encode?: string;
  is_encode?: boolean;
  format?: string;
  token?: string;
  new_version?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface Version {
  id?: string;
  version?: number;
  pages?: Page[];
}

export interface Page {
  id?: string;
  path?: string;
  file_name?: string;
  storage?: string;
  hash?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface AttributesValue {
  id?: string;
  name?: string;
  value?: any;
  is_cipher?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface EntityValue {
  id?: string;
  attributes_id?: string;
  entity?: any;
  entity_object?: Entities;
  attributes?: AttributesValue[];
  attributes_value?: AttributesValue[];
}
