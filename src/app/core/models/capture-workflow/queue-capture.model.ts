import {Attribute, DocType} from '@app/core/models';
import {PageWorkflowModel} from "@app/core/models/capture-workflow/page-workflow.model";

export interface QueueCapture {
  id: string;
  allows_typing: string;
  capture_type: CaptureType;
  execution_id: string;
  attribute_capture?: AttributeCapture[];
}

export interface ParamsCapture {
  id: number;
  dictionary: Dictionary;
  value: string;
  created_at: Date;
  updated_at: Date;
}

export interface Dictionary {
  id: number;
  name: string;
  value: string;
}

export interface AttributeCapture {
  id: string;
  capture_type: number;
  attribute_id: Attribute;
}

export interface CaptureType {
  Id: number;
  name: string;
}

export interface QueueDoctype {
  id: string;
  doctype_id: DocType;
}

export interface DocumentGroupPage {
  id: number;
  doctype_name: string;
  doctype_id: string;
  pages: PageWorkflowModel[];
  entitiesValues: any[];
  isCreated: boolean;
  sequence: number;
  version_id: number;
  main: boolean;
}

export interface DataCapturedCreate {
  document_id: number;
  capture_number: number;
  valor: string;
  entity_id: string;
  attribute: string;
  usuario: string;
  batch: number;
}

export interface DataCapturedResponse extends DataCapturedCreate {
  id: number;
}

export interface DataCapturedDoctype {
  document_id: number;
  doctype_id: string;
  user_id: string;
  number_capture: number;
}

export interface DocTypeBatch {
  id: number;
  document_id: number;
  doctype: {
    id: string;
  }
  user_id: string;
  number_capture: number;
  created_at: string;
  updated_at: string;
}
