import {createReducer, on} from "@ngrx/store";
import {setLanguage} from "@app/core/store/actions/language.action";
export interface LanguageState {
  id: string;
  language: string;
}
export const Language: LanguageState = {
  id: "",
  language: ""
};

const languageReducer = createReducer(
  Language,
  on(setLanguage, (state, { language }) => ({
    ...state,
    language: language.language,
    id: language.id
  }))
);

export function LanguageReducer(state: any, action: any) {
  return languageReducer(state, action);
}
