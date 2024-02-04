import { createAction, props } from '@ngrx/store';

export const setEnv = createAction('setEnv', props<{ env: string }>());
