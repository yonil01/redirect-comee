import { createReducer, on } from '@ngrx/store';
import { controlBpm, controlElement, controlSide, controlTask, isChanged, controlBpmVersions } from '@app/core/store/actions/bpm.action';
import { Process, Queue } from '@app/core/models';

export interface BpmState {
  bpm: Process;
  task: Queue;
  element: any;
  showSide: boolean;
  isChanged: boolean;
  versions: Process[];
}

export const BpmInitialState: BpmState = {
  bpm: {} as Process,
  task: {} as Queue,
  element: null,
  showSide: false,
  isChanged: false,
  versions: []
};

const bpmReducer = createReducer(
  BpmInitialState,
  on(controlBpm, (state, { bpm }) => ({
    ...state,
    bpm: { ...bpm },
  })),

  on(controlBpmVersions, (state, { versions }) => ({
    ...state,
    versions
  })),

  on(controlTask, (state, { task }) => ({
    ...state,
    task: { ...task },
  })),

  on(controlElement, (state, { element }) => ({
    ...state,
    element: { ...element },
  })),

  on(controlSide, (state, { showSide }) => ({
    ...state,
    showSide: showSide,
  })),

  on(isChanged, (state) => ({
    ...state,
    isChanged: true,
  })),
);

export function BpmReducer(state: any, action: any) {
  return bpmReducer(state, action);
}
