import { createAction, props } from '@ngrx/store';
import { Process, Queue, Module } from '@app/core/models';

export const controlModules = createAction('[modules] load modules', props<{ modules: Module[] }>());
