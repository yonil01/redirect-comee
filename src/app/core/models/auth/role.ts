import {Attribute, DocType, Element, Entities, Project} from "@app/core/models";

export interface Role {
  id: string;
  name: string;
  description: string;
  sessions_allowed: number;
  role_allow?: RolesAllow[];
  see_all_users: boolean;
  date_disallowed: RolesDateDisallowed[];
  password_policy?: RolesPasswordPolicy;
  roles_doc_types?: RolesDoctype[];
  role_elements: RolesElement[];
  projects: RolesProject[];
  security_entities?: RolesSecurityEntity[];
}

export interface RolesDoctype {
  id: string;
  doctype: DocType;
}

export interface RolesDateDisallowed {
  id: string;
  description: string;
  begins_at: string;
  ends_at?: string;
}

export interface RolesPasswordPolicy {
  id: string;
  days_pass_valid: number;
  max_lengt?: number;
  min_length: number;
  store_pass_not_repeated: number;
  failed_attempts: number;
  time_unlock: number;
  alpha: number;
  digits: number;
  special: number;
  upper_case: number;
  lower_case: number;
  enable: boolean;
  inactivity_time: number;
  timeout: number;
}

export interface SecurityEntities {
  id?: string;
  role_id?: string;
  entity?: string; // Id Entidad
  name_entities?: string;
  role_attribute?: Attributes[];
}

export interface Attributes {
  id?: string;
  value?: string;
  // enable?: boolean;
  attribute?: string; // Id Atributo
  name_attribute?: string;
  roles_security_entities_id?: string;
}

export interface RolesElement {
  id: string;
  element: Element;
}

export interface RolesProject {
  id: string;
  project: Project;
}

export interface RolesAllow {
  id: string;
  role_allow?: Role;
}

export interface RolesSecurityEntity {
  id: string;
  entity: Entities;
  role_attribute: RolesAttribute[];
}

export interface RolesAttribute {
  id: string;
  value: string;
  attribute: Attribute;
}
