import {SafeResourceUrl} from "@angular/platform-browser";

export interface PageWorkflowModel {
  id: number;
  file_name: string;
  file_encode: string;
  number_pages: number;
  version_id: number;
  extension: string;
  urlBase64: string;
}

export interface PagesCaptureModel {
  file: PageWorkflowModel,
  files: PageWorkflowModel[]
}
