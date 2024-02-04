import {FormGroup} from "@angular/forms";
import {Attribute} from "@app/core/models";
import {RequiredAttribute, RequiredAttributeCommon} from "@app/core/models/annexe/annexe";

export interface ResponseAny<T = any> {
  error: boolean;
  data: T;
  msg: string;
  code: number;
  type: string;
}

export interface Section {
  id: string;
  form: FormGroup;
  attributes: Attribute[];
}

export interface Container {
  id: string;
  sequence: number;
  form_entities: FormEntity[];
  name: string;
  styles: string;
}

export interface FormEntity {
  id: string;
  sequence: number;
  style: string;
  name: string;
}

export interface DoctypeForm {
  id?: number;
  doctype_id: string;
  doctype?: string;
  original_file: string;
  file_encode: string;
  entities: EntityForm[];
  new_version: number;
}

export interface EntityForm {
  id?: string;
  entity: any;
  attributes: AttributeForm[];
  attributes_id?: string;
  attributes_value?: any;
}

export interface AttributeForm {
  name: string;
  value: string;
}

export interface ResponseGetDataSet {
  error: boolean;
  data: DataSetModel[];
  msg: string;
  type: string;
  code: number;
}


export interface DataSetModel {
  id: number;
  code: number
  sequence: number;
  value: string;
  description: string;
}

export interface CreateEntity {
  document_id: string;
  entities: EntityForm[];
}

export interface DocumentForm {
  id: number;
  auto_name: string;
  batch: number;
  status: number;
  entities: EntityDocument[];
  locked: boolean;
  format: string;
}

export interface EntityDocument {
  attributes_id: string;
  entity: entityDocumentValue;
  attributes_value: AttributesValueDocument[]
}

export interface entityDocumentValue {
  id: string;
  name: string;
}

export interface AttributesValueDocument {
  name: string;
  value: string;
}
export interface GroupInfo {
  layout: Layout;
  title: Description;
  description: Description;
  sequence: number;
}

export interface Description {
  text: string;
  style: string;
  sequence: number;
}

export interface Layout {
  distribution: string;
  orientation: string;
  gap: string;
  align: string;
  justify: string;
}

export interface Sections {
  multiple: boolean;
  layout: Layout;
  section: SectionDynamic[];
}

export interface SectionDynamic {
  id: number;
  name: string;
  sequence: number;
  info: GroupInfo;
  layout: Layout;
  form_entities: DocumentsRequired[];
  documents_required: DocumentsRequired[];
}

export interface DocumentsRequired {
  id: string;
  sequence: number;
  style: string;
}

export interface FileAnnexe {
  id: number;
  name: string;
  file_name: string;
  is_load: boolean;
  is_required: boolean;
  docType_id: string;
  annexe_id: string;
  required_attributes?: RequiredAttribute[];
  required_attributes_common?: RequiredAttributeCommon[];
  file_encode: string;
  disabled: boolean;
}
