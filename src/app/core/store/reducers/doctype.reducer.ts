import { DocTypeGroups, DocType, DoctypeEntities, Entities } from '@app/core/models';
import { createReducer, on } from '@ngrx/store';
import {
  showDoctypegroup,
  cancelAddDoctypegroup,
  controlDoctypegroup,
  controlDoctypegroups,
  savedDoctypegroup,
  addDoctypegroup,
  editDoctypegroup,
  controlDoctype,
  controlDoctypes,
  deleteDocType,
  editDoctype,
  addDoctype,
  cancelAddDocType,
  showAddDocType,
  addAutoname,
  controlAutoname,
  showAddAutoname,
  cancelAutoname,
  showEditEntity,
  cancelEditEntity,
  editEntity,
} from '@app/core/store/actions/doctype.action';

export interface DoctypeState {
  isShowDoctypegroup: boolean;
  isShowAddDocType: boolean;
  isShowAddAutoname: boolean;
  isShowEditEntity: boolean;

  text: string;
  doctypegroup: DocTypeGroups;
  indexDoctypegroup: number;
  doctypegroups: DocTypeGroups[];
  doctype: DocType;
  indexDocType: number;

  docEntity: DoctypeEntities[];
  docEntities: Entities;
  autoName: DocType[];
  auto_Name: DocType;

  operation: string;
}

export const DoctypeInitialState: DoctypeState = {
  isShowDoctypegroup: false,
  isShowAddDocType: false,
  isShowAddAutoname: false,
  isShowEditEntity: false,
  text: '',
  doctypegroup: {} as DocTypeGroups,
  indexDoctypegroup: 0,
  doctypegroups: [],
  doctype: {} as DocType,
  indexDocType: 0,
  operation: '',

  docEntity: [],
  docEntities: {} as Entities,

  autoName: [],
  auto_Name: {} as DocType,
};

const doctypeReducer = createReducer(
  DoctypeInitialState,

  on(controlDoctypegroups, (state, { doctypegroups }) => ({
    ...state,
    doctypegroup: {} as DocTypeGroups,
    doctypegroups,
  })),

  on(controlDoctypegroup, (state, { doctypegroup, index }) => ({
    ...state,
    isShowDoctypegroup: false,
    indexDoctypegroup: index,
    doctypegroup,
    operation: '',
  })),

  on(controlAutoname, (state, { autoname }) => ({
    ...state,
    autoName: autoname,
  })),

  on(controlDoctype, (state, { docType, indexDocType }) => ({
    ...state,
    indexDocType: indexDocType,
    doctype: docType ? { ...docType } : {} as DocType,
    operation: 'nul',
  })),

  on(addDoctypegroup, (state, { doctypegroup }) => ({
    ...state,
    isShowDoctypegroup: false,
    doctypegroup: { ...doctypegroup },
    doctypegroups: [...state.doctypegroups, doctypegroup],
    operation: '',
    indexDoctypegroup: state.doctypegroups.length,
  })),

  on(savedDoctypegroup, (state) => ({
    ...state,
    ...saveDoctypegroup(state.doctypegroups, state.indexDoctypegroup),
    doctypegroup: {} as DocTypeGroups,
  })),

  on(addAutoname, (state, { autoName }) => ({
    ...state,
    // isShowAddAutoname: false,
    ...addInAutoName(state.doctypegroups, state.indexDoctypegroup, state.indexDocType, autoName),
    operation: '',
  })),

  on(addDoctype, (state, { doctype }) => ({
    ...state,
    isShowAddDocType: false,
    // doctype: null,
    ...addInDocType(state.doctypegroups, state.indexDoctypegroup, doctype),
    operation: '',
  })),

  on(editDoctype, (state, { doctype }) => ({
    ...state,
    isShowAddDocType: false,
    doctype: {} as DocType,
    ...updateInDoctype(state.doctypegroups, state.indexDoctypegroup, state.indexDocType, doctype),
    operation: '',
  })),

  on(showDoctypegroup, (state, { operation }) => ({
    ...state,
    isShowDoctypegroup: true,
    operation,
  })),

  on(cancelAddDoctypegroup, (state) => ({
    ...state,
    isShowDoctypegroup: false,
  })),

  on(showAddDocType, (state, { operation }) => ({
    ...state,
    isShowAddDocType: false,
    operation,
  })),

  on(cancelAddDocType, (state) => ({
    ...state,
    isShowAddDocType: false,
  })),

  on(deleteDocType, (state, { indexDocType }) => ({
    ...state,
    ...deleteInDocType(state.doctypegroups, state.indexDoctypegroup, indexDocType),
    operation: '',
  })),

  on(showAddAutoname, (state, { operation }) => ({
    ...state,
    isShowAddAutoname: true,
    operation,
  })),

  on(cancelAutoname, (state) => ({
    ...state,
    isShowAddAutoname: false,
  })),

  on(showEditEntity, (state, { operation }) => ({
    ...state,
    isShowEditEntity: true,
    operation,
  })),

  on(cancelEditEntity, (state) => ({
    ...state,
    isShowEditEntity: false,
  })),

  on(editEntity, (state, { docEntity }) => ({
    ...state,
    // isShowEditEntity: false,
    // doctype: null,
    // docEntity: null,
    ...addInEditentity(state.doctypegroups, state.indexDoctypegroup, state.indexDocType, docEntity),
    operation: '',
  })),

  on(editDoctypegroup, (state, { doctypegroup }) => ({
    ...state,
    isShowDoctypegroup: false,
    doctypegroup: { ...doctypegroup },
    doctypegroups: updateDoctypeGroup(state.doctypegroups, state.indexDoctypegroup, doctypegroup),
    operation: '',
  })),

  on(controlDoctypes, (state, { doctype, indexDocType, operation }) => ({
    ...state,
    isShowAddDocType: true,
    indexDoctype: indexDocType,
    doctype: doctype ? { ...doctype } : {} as DocType,
    operation,
  })),
);

export function DoctypeReducer(state: any, action: any) {
  return doctypeReducer(state, action);
}

function updateDoctypeGroup(doctypegroups: DocTypeGroups[], indexDoctypegroup: number, doctypegroup: DocTypeGroups) {
  const doctypeGrupList = JSON.parse(JSON.stringify(doctypegroups));
  doctypeGrupList[indexDoctypegroup] = doctypegroup;
  return doctypeGrupList;
}

function addInDocType(doctypegroups: DocTypeGroups[], indexDoctypegroup: number, doctypes: DocType) {
  const doctypegroupList: any[] = JSON.parse(JSON.stringify(doctypegroups));
  doctypegroupList[indexDoctypegroup].doctypes = doctypegroupList[indexDoctypegroup].doctypes
    ? doctypegroupList[indexDoctypegroup].doctypes
    : [];
  doctypegroupList[indexDoctypegroup].doctypes = [...doctypegroupList[indexDoctypegroup].doctypes, doctypes];
  return { doctypegroups: doctypegroupList, doctypegroup: doctypegroupList[indexDoctypegroup] };
}

function updateInDoctype(
  doctypegroups: DocTypeGroups[],
  indexDoctypegroup: number,
  indexDoctype: number,
  doctype: DocType,
) {
  const doctypeGrupList = JSON.parse(JSON.stringify(doctypegroups));
  doctypeGrupList[indexDoctypegroup].doctypes[indexDoctype] = doctype;
  doctypeGrupList[indexDoctypegroup].is_update = !doctypeGrupList[indexDoctypegroup].is_new;
  return { doctypegroups: doctypeGrupList, doctypegroup: doctypeGrupList[indexDoctypegroup] };
}

function deleteInDocType(doctypegroups: DocTypeGroups[], indexDoctypegroup: number, indexDocType: number) {
  const doctypegroupList: any[] = JSON.parse(JSON.stringify(doctypegroups));
  doctypegroupList[indexDoctypegroup].doctypes.splice(indexDocType, 1);
  // doctypegroupList[indexDoctypegroup].is_update = !doctypegroupList[indexDoctypegroup].is_new;
  return { doctypegroups: doctypegroupList, doctypegroup: doctypegroupList[indexDoctypegroup] };
}

function addInAutoName(
  doctypegroups: DocTypeGroups[],
  indexDoctypegroup: number,
  indexAutoName: number,
  autoName: string,
) {
  const doctypeGrupList = JSON.parse(JSON.stringify(doctypegroups));
  doctypeGrupList[indexDoctypegroup].doctypes[indexAutoName].autoname = autoName;
  doctypeGrupList[indexDoctypegroup].is_update = !doctypeGrupList[indexDoctypegroup].is_new;
  return { doctypegroups: doctypeGrupList, doctypegroup: doctypeGrupList[indexDoctypegroup] };
}

function addInEditentity(
  doctypegroups: DocTypeGroups[],
  indexDoctypegroup: number,
  indexAutoName: number,
  docEntity: DoctypeEntities[],
) {
  const doctypeGrupList: any[] = JSON.parse(JSON.stringify(doctypegroups));
  doctypeGrupList[indexDoctypegroup].doctypes[indexAutoName].doctypes_entities = doctypeGrupList[indexDoctypegroup]
    .doctypes[indexAutoName].doctypes_entities
    ? doctypeGrupList[indexDoctypegroup].doctypes[indexAutoName].doctypes_entities
    : [];
  doctypeGrupList[indexDoctypegroup].doctypes[indexAutoName].doctypes_entities = docEntity;
  // doctypeGrupList[indexDoctypegroup].is_update = !doctypeGrupList[indexDoctypegroup].is_new;
  return { doctypegroups: doctypeGrupList, doctypegroup: doctypeGrupList[indexDoctypegroup] };
}

function saveDoctypegroup(doctypegroups: DocTypeGroups[], indexDoctypegroup: number) {
  const doctypeGrupList = JSON.parse(JSON.stringify(doctypegroups));
  doctypeGrupList[indexDoctypegroup].is_new = false;
  doctypeGrupList[indexDoctypegroup].is_update = false;
  return { doctypegroups: doctypeGrupList, doctypegroup: doctypeGrupList[indexDoctypegroup] };
}
