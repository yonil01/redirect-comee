export interface Document {
  id?: number;
  doctype_id?: string;
  auto_name?: string;
  doctype?: any;
  original_file?: string;
  user_creation?: string;
  user_delete?: string;
  batch?: number;
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
  version: number;
  pages: Page[];
}

export interface Page {
  id: string;
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
  attributes?: AttributesValue[];
  attributes_value?: AttributesValue[];
}

export interface CreatePage {
  document_id: number;
  original_file: string;
  number_pages: number;
  file_encode: string;
}
