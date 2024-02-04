import { createReducer, on } from '@ngrx/store';
import { controlSource, resetStoreDocumentFile } from '@app/core/store/actions/document-source.action';
import { controlSourceBpmn } from '../actions/document-source.action';

export interface DocumentSourceState {
  base64: string;
  typeFile: string;
  bpmnBase64: string;
}

export const DocumentSourceInitialState: DocumentSourceState = {
  base64: '',
  typeFile: '',
  bpmnBase64: '',
};

const documentSourceReducer = createReducer(
  DocumentSourceInitialState,
  on(controlSource, (state, { base64, typeFile }) => ({
    ...state,
    base64,
    typeFile,
  })),

  on(controlSourceBpmn, (state, { base64 }) => ({
    ...state,
    bpmnBase64: base64,
  })),

  on(resetStoreDocumentFile, (state) => ({
    ...state,
    ...DocumentSourceInitialState,
  })),
);

export function DocumentSourceReducer(state: any, action: any) {
  return documentSourceReducer(state, action);
}
