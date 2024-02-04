import { createAction, props } from '@ngrx/store';

export const controlSource = createAction('[document-file] load source', props<{ base64: string, typeFile: string }>());

export const controlSourceBpmn = createAction('[document-file] load  Bpmn', props<{ base64: string }>());

export const resetStoreDocumentFile = createAction('[document-file] resetStoreDocumentFile');
