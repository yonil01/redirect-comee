import {createAction, props} from '@ngrx/store';
import {HookState} from "@app/core/store/reducers/hook.reducer";

export const saveHookState = createAction('HookState save', props<{ hookState: HookState, key_form: string }>());
export const resetHookState = createAction('[rules] clear HookState', props<{ key_form: string}>());
