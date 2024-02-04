import { createAction, props } from '@ngrx/store';
import { Component } from '@app/core/models';

export const controlComponent = createAction('[component] load component', props<{ component: Component }>());
