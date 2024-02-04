import {DocTypeGroups} from "@app/core/models";

export interface Customer {
  id?: string;
  name?: string;
  projects?: Project[];
  created_at?: Date;
  updated_at?: Date;
}

export interface Project {
  id?: string;
  name?: string;
  description?: String;
  department?: String;
  email?: String;
  phone?: String;
  product_owner?: String;
  customers_id?: string;
}

export interface Storage {
  path?: string;
  doc_type_groups?: DocTypeGroups[];
}
