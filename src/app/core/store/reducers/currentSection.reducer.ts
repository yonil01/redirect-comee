import {createReducer, on} from '@ngrx/store';
import {directSection, resetDirectSection} from '../actions/currentSection.action';

export interface CurrentSectionState {
  currentSectionId: string;
  action: string;
  key_form: string;
}

export const currentSectionInitialize: CurrentSectionState[] = [];

const directionarSection = createReducer(
  currentSectionInitialize,
  on(directSection, (state, {CurrentSection, key_form}) => {
    const sectionDiff = state.filter((form) => form.key_form !== key_form);
    return [CurrentSection, ...sectionDiff];
  }),
  on(resetDirectSection, (state, {key_form}) => (state.filter((form) => form.key_form !== key_form)))
);

export function CurrentSectionReducer(state: any, action: any) {
  return directionarSection(state, action);
}
