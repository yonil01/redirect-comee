import { createAction, props } from '@ngrx/store';

export const controlHistorialWorkflow = createAction(
  '[menu-documents] load historialWorkflow',
  props<{ historialWorkflow: any[] }>(),
);

export const controlHistorialDocument = createAction(
  '[menu-documents] load historialDocument',
  props<{ historialDocument: any[] }>(),
);

export const controlComments = createAction('[menu-documents] load comments', props<{ comments: any[] }>());

export const controlSimpleEntities = createAction(
  '[menu-documents] show entities',
  props<{ showSimpleEntities: boolean }>(),
);

export const controlMultipleEntities = createAction(
  '[menu-documents] show multiple entities',
  props<{ showMultipleEntities: boolean }>(),
);

export const controlNewDocument = createAction(
  '[menu-documents] show new document',
  props<{ showNewDocument: boolean }>(),
);

export const controlNewDynamicForm = createAction(
  '[menu-documents] show new dynamic form',
  props<{ showNewDynamicForm: boolean }>(),
);

export const controlNewExternalForm = createAction(
  '[menu-documents] show new external form',
  props<{ showNewExternalForm: boolean }>(),
);

export const controlTabMenuItems = createAction('[menu-documents] add tabMenuItem', props<{ tabMenuItems: any[] }>());

export const controlTraceability = createAction('[menu-documents] load traceability', props<{ traceability: any[] }>());

export const resetStoreMenuDocument = createAction('[menu-documents] reset store', props<any>());
