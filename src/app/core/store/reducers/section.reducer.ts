import {createReducer, on} from "@ngrx/store";
import {EntityForm, FileAnnexe} from "@app/modules/form/models/models";
import {resetSectionValues, saveSection} from "@app/core/store/actions/sections.action";

export interface SectionState {
  Entities: EntityForm[];
  filesAnnexe: FileAnnexe[];
  sectionId: string;
  is_readonly: boolean;
  key_form: string;
}

export const SectionsInitialState: SectionState [] = [];

const sectionReducer = createReducer(
  SectionsInitialState,
  on(saveSection, (state, {Sections, key_form}) => {
    const sectionsDiff = state.filter(section => section.key_form !== key_form);
    return [...Sections, ...sectionsDiff];
  }),
  on(resetSectionValues, (state, {key_form}) => (state.filter((form) => form.key_form !== key_form)))
);

export function SectionReducer(state: any, action: any) {
  return sectionReducer(state, action);
}
