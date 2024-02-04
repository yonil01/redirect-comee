import { Project } from '@app/core/models';
import { Entities } from './entities';
import {Required} from "@app/core/models/annexe/annexe";

export interface DocTypeGroups {
  id: string;
  name: string;
  project: Project;
  doctypes?: DocType[];
}

export interface DocType {
  id: string;
  code: string;
  name: string;
  url_path: string;
  storage_id: string;
  format: string;
  autoname: string;
  tipo_soporte: string;
  retencion_electronic: number;
  retencion_ag: number;
  retencion_ac: number;
  retencion_ah: number;
  final_disposition: string;
  digitalizacion: boolean;
  procedure: string;
  class: string;
  is_cipher: boolean;
  doctypes_groups_id: string;
  doctypes_entities: DoctypeEntities[];
  //forms_events: [FormsEvent!]
  required: Required[];
}

export interface DoctypeEntities {
  id: string;
  entities: Entities;
  sequence: number;
}
