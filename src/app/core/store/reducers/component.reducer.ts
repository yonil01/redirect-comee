import { createReducer, on } from '@ngrx/store';
import { Component } from '@app/core/models';
import { controlComponent } from '../actions/component.action';

export interface ComponentState {
  component: Component;
}

export const ComponentInitialState: ComponentState = {
  component: {} as Component,
};

const componentReducer = createReducer(
  ComponentInitialState,

  on(controlComponent, (state, { component }) => ({
    ...state,
    component,
  })),
);

export function ComponentReducer(state: any, action: any) {
  return componentReducer(state, action);
}
