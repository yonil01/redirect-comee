import { createAction, props } from '@ngrx/store';
import { Process, Queue } from '@app/core/models';

export const controlBpm = createAction('[bpm] bpm', props<{ bpm: Process }>());

export const controlBpmVersions = createAction('[bpm] bpm versions', props<{ versions: Process[] }>());

export const controlTask = createAction('[bpm] task', props<{ task: Queue }>());

export const controlElement = createAction('[bpm] element', props<{ element: any }>());

export const controlSide = createAction('[bpm] sideForm', props<{ showSide: boolean }>());

export const isChanged = createAction('[bpm] isChanged');
