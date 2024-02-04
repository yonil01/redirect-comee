import {createAction, props} from "@ngrx/store";
import {SectionState} from "@app/core/store/reducers/section.reducer";

export const saveSection = createAction('[SectionState] Sections', props<{ Sections: SectionState[], key_form: string }>());
export const resetSectionValues = createAction('[rules] clear rules section', props<{ key_form: string}>());
