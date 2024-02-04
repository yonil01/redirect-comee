import {createAction, props} from "@ngrx/store";

export const controlProcess = createAction('controlProcess', props<{ process: any }>());
