import { createAction, props } from '@ngrx/store';
import { CurrentSectionState } from '@app/core/store/reducers/currentSection.reducer';

export const directSection = createAction('CurrentSectionState', props<{ CurrentSection: CurrentSectionState, key_form: string }>());
export const resetDirectSection = createAction('[rules] reset sections navigation', props<{key_form: string}>());
