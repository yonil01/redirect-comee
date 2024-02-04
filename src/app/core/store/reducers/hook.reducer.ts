import {createReducer, on} from '@ngrx/store';
import {resetHookState, saveHookState} from "@app/core/store/actions/hook.action";
import {AttributeForm, DocumentForm} from "@app/modules/form/models/models";
import {SectionState} from "@app/core/store/reducers/section.reducer";
import {resetSectionValues} from "@app/core/store/actions/sections.action";
import {Attribute} from "@app/core/models";

interface EntityState {
  id: string;
  name: string;
}

interface AttributeState extends EntityState {
  last_value: string;
  current_value: string;
  valuesMultiple: any[];
}

interface FormValues {
  form_values: any;
  sectionValues: SectionState[];
  documentForm: DocumentForm;
  entity: EntityState;
  attribute: AttributeState;
}

export interface HookState {
  key_form: string;
  name: string;
  group_id: string;
  section_id: string;
  values: FormValues;
  attributes: Attribute[];
  queue_id: string;
  doctype: string; //--
  document: string; //--
  token: string; //--
  first_change?: boolean;
}

export const HookInitialState: HookState[] = [];

const hookReducer = createReducer(
  HookInitialState,
  on(saveHookState, (state, {hookState, key_form}) => {
    const hookDiff = state.filter((hook) => hook.key_form !== key_form);
    return [...hookDiff, hookState];
  }),
  on(resetHookState, (state, {key_form}) => (state.filter((hookState) => hookState.key_form !== key_form)))
);

export function HookReducer(state: any, action: any) {
  return hookReducer(state, action);
}
