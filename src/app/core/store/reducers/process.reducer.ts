import {createReducer, on} from "@ngrx/store";
import {controlProcess} from "@app/core/store/actions/process.action";

export interface ProcessState {
  process: {}
}

export const ProcessInitialState = {
  process: {}
};

const _processReducer = createReducer(
  ProcessInitialState,
  on(controlProcess, (state, {process}) => ({
    ...state,
    process,
  }))
);

export function ProcessReducer(state: any, action: any) {
  return _processReducer(state, action);
}
