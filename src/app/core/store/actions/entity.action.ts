import { createAction, props } from '@ngrx/store';
import { Entities, Attribute, Dataset } from '@app/core/models';

export const controlEntities = createAction('[Entity] load entities', props<{ entities: Entities[] }>());

export const controlEntity = createAction('[Entity] load entity', props<{ entity: Entities; index: number }>());

export const showEntity = createAction('[Entity] show entity', props<{ operation: string }>());

export const editEntity = createAction('[Entity] edit entity', props<{ entity: Entities }>());

export const addEntity = createAction('[Entity] add entity', props<{ entity: Entities }>());

export const cancelEditEnty = createAction('[Entity] cancel edit entity');

export const controlAttribute = createAction(
  '[Attribute] load attribute',
  props<{ attribute: Attribute; index: number; operation: string }>(),
);

export const editAttribute = createAction('[Attribute] edit attribute', props<{ attribute: Attribute }>());

export const addAttribute = createAction('[Attribute] add attribute', props<{ attribute: Attribute }>());

export const deleteAttribute = createAction('[Attribute] delete attribute', props<{ indexAttribute: number }>());

export const cancelAttribute = createAction('[Attribute] cancel edit attribute');

export const controlDatasets = createAction('[Dataset] load Datasets', props<{ datasets: Dataset[]; index: number }>());

export const editDatasets = createAction('[Datasets] edit Datasets', props<{ datasets: Dataset[] }>());

export const cancelDatasets = createAction('[Datasets] cancel edit datasets');

export const editAutofill = createAction(
  '[Autofill] edit autofill',
  props<{ autofills: string[]; indexAttribute: number }>(),
);

export const editCascadingdt = createAction(
  '[Cascadingdt] edit cascadingdt',
  props<{ cascadingdt: string[]; indexAttribute: number }>(),
);

export const savedEntity = createAction('[Entity] save entity');
