import { createAction, props } from '@ngrx/store';

export const controlTimeout = createAction('[document-file] load timeout', props<{ timeout: number }>());

export const controlLogin = createAction('[document-file] load login', props<{ logged: boolean }>());
