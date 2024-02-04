import { createAction, props } from '@ngrx/store';
import { DocTypeGroups, DocType, DoctypeEntities } from '@app/core/models';

// Acciones Docty Groups
export const showDoctypegroup = createAction('[DocTypeGroups] show doctygroup', props <{operation: string}>());
export const cancelAddDoctypegroup = createAction('[DocTypeGroups] cancel add doctypegroup');
export const controlDoctypegroup = createAction('[DocTypeGroups] load doctygroup', props<{ doctypegroup: DocTypeGroups; index: number }>());
export const controlDoctypegroups = createAction('[DocTypeGroups] load doctygroups', props<{ doctypegroups: DocTypeGroups []}>());
export const addDoctypegroup = createAction('[DocTypeGroups] add doctygroups', props<{ doctypegroup: DocTypeGroups }>());
export const editDoctypegroup = createAction('[DocTypeGroups] edit doctygroups', props<{ doctypegroup: DocTypeGroups }>());
export const savedDoctypegroup = createAction('[DocTypeGroups] save doctypegroup');
export const controlDoctype = createAction('[DocTypes] load doctype', props<{ docType: DocType; indexDocType: number }>());

// Acciones Doctype
export const addDoctype = createAction('[DocTypes] add doctype', props<{ doctype: DocType }>());
export const editDoctype = createAction('[DocTypes] edit doctype', props<{ doctype: DocType }>());
export const showAddDocType = createAction('[DocTypes] show doctype', props <{operation: string}>());
export const cancelAddDocType = createAction('[DocTypes] cancel add doctype');
export const controlDoctypes = createAction(
    '[DocTypes] load doctype',
    props<{ doctype: DocType; indexDocType: number; operation: string }>());

export const deleteDocType = createAction('[DocTypes] delete doctype', props<{ indexDocType: number }>());
// Acciones Autoname
export const addAutoname = createAction('[DocTypes] add autoname', props<{ autoName: string, indexDocType: number }>());
export const controlAutoname = createAction('[DocTypes] load autoname', props<{ autoname: DocType []}>());
export const showAddAutoname = createAction('[DocTypes] show autoname', props <{operation: string}>());
export const cancelAutoname = createAction('[DocTypes] cancel autoname');

// Acciones editEntity
export const showEditEntity = createAction('[DoctypeEntities] show editEntity', props <{operation: string}>());
export const cancelEditEntity = createAction('[DoctypeEntities] cancel edit Entity');
export const editEntity = createAction('[DoctypeEntities] edit entity', props<{ docEntity: DoctypeEntities[], indexDocType: number}>());
