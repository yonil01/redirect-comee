import { createReducer, on } from '@ngrx/store';
import { setEnv } from '../actions/env.actions';

export interface EnvState {
  env: string;
}

export const EnvInitialState: EnvState = {
  env: '',
};

const envReducer = createReducer(
  EnvInitialState,
  on(setEnv, (state, { env }) => ({
    env: env
  })),
);

export function EnvReducer(state: any, action: any) {
  return envReducer(state, action);
}
