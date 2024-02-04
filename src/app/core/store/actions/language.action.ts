import { createAction, props } from '@ngrx/store';
import {LanguageState} from "@app/core/store/reducers";

export const setLanguage = createAction('string', props<{ language: LanguageState }>());
