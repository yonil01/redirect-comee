import {createReducer, on} from '@ngrx/store';
import {
  controlDashboard,
  addGridsterItem,
  deleteGridsterItem,
  editGridsterItem,
  controlGridsterItem,
  addDashboard,
  controlEForm,
} from '@app/core/store/actions/dynamic-forms.actions';
import {DocType, Entities} from '@app/core/models';
import {controlFormDoctype} from '@app/core/store/actions/dynamic-forms.actions';
import {Form, Container} from '@app/core/models/config/form';
import {
  addContainer,
  deleteContainer,
  editContainer,
  controlJsonForm,
  controlJsonStepForm,
  editIndexContainer,
  editIndexDashboard,
  editIndexGridsterItem,
} from '../actions/dynamic-forms.actions';
import {StepType} from '@app/core/models/config/form';
import {
  editDashboard,
  controlDocumentId,
  resetStoreDynamicForms,
  deleteDashboard,
} from '../actions/dynamic-forms.actions';

export interface DynamicFormsState {
  dashboards: any[];
  dashboard: Array<any>;
  gridsterItem: any;
  indexGridsterItem: number;
  indexContainer: number;
  indexDashboard: number;
  formDoctype: DocType;
  entitiesSimples: Entities[];
  entitiesMultiples: Entities[];
  eform: Form;
  jsonForm: any[];
  jsonStepForm: StepType[];
  typeElementConfig: string;
  models: {};
  documentId: string;
}

export const DynamicFormsInitialState: DynamicFormsState = {
  dashboards: [],
  dashboard: [],
  gridsterItem: null,
  indexGridsterItem: 0,
  indexContainer: 0,
  indexDashboard: 0,
  formDoctype: {} as DocType,
  entitiesSimples: [],
  entitiesMultiples: [],
  eform: {},
  jsonForm: [],
  jsonStepForm: [],
  typeElementConfig: '',
  models: {},
  documentId: '',
};

const dynamicFormsReducer = createReducer(
  DynamicFormsInitialState,

  on(controlDashboard, (state, {dashboard}) => ({
    ...state,
    dashboard,
  })),
  on(addGridsterItem, (state, {gridsterItem, indexContainer, indexDashboard}) => ({
    ...state,
    ...addInGridsterItem(state, gridsterItem, indexContainer, indexDashboard),
  })),
  on(deleteGridsterItem, (state, {indexItem}) => ({
    ...state,
    ...deleteInGridsterItem(state, indexItem),
  })),
  on(editGridsterItem, (state, {gridsterItem}) => ({
    ...state,
    ...editGridsterItemDashboard(state, gridsterItem),
  })),
  on(controlGridsterItem, (state, {index, gridsterItem}) => ({
    ...state,
    gridsterItem: gridsterItem,
    index: index,
  })),
  on(controlFormDoctype, (state, {formDoctype}) => ({
    ...state,
    formDoctype,
    ...sortOutEntities(formDoctype),
  })),
  on(controlEForm, (state, {eform}) => ({
    ...state,
    eform,
  })),
  on(addContainer, (state, {container}) => ({
    ...state,
    ...addInContainer(state, container),
  })),
  on(deleteContainer, (state, {indexContainer}) => ({
    ...state,
    ...deleteInContainer(state, indexContainer),
  })),
  on(editContainer, (state, {container, indexContainer}) => ({
    ...state,
    ...editInContainer(state, container, indexContainer),
  })),
  on(addDashboard, (state, {dashboard, indexContainer}) => ({
    ...state,
    ...addInDashboard(state, dashboard, indexContainer),
  })),
  on(editDashboard, (state, {dashboard}) => ({
    ...state,
    ...editInDashboard(state, dashboard),
  })),
  on(deleteDashboard, (state, {indexDashboard}) => ({
    ...state,
    ...deleteInDashboard(state, indexDashboard),
  })),
  on(controlJsonForm, (state, {jsonForm, models}) => ({
    ...state,
    jsonForm,
    models,
  })),
  on(controlJsonStepForm, (state, {jsonStepForm}) => ({
    ...state,
    jsonStepForm,
  })),
  on(editIndexContainer, (state, {indexContainer}) => ({
    ...state,
    indexContainer,
  })),
  on(editIndexDashboard, (state, {indexDashboard}) => ({
    ...state,
    indexDashboard,
    typeElementConfig: 'dashboard',
  })),
  on(editIndexGridsterItem, (state, {indexGridsterItem}) => ({
    ...state,
    indexGridsterItem,
    typeElementConfig: 'item',
  })),
  on(controlDocumentId, (state, {documentId}) => ({
    ...state,
    documentId,
  })),
  on(resetStoreDynamicForms, (state) => ({
    ...state,
    ...DynamicFormsInitialState,
  })),
);

function deleteInGridsterItem(state: any, indexItem: any) {
  const eform: any = JSON.parse(JSON.stringify(state.eform));
  eform.containers[state.indexContainer].dashboards[state.indexDashboard].gridsterItems?.splice(indexItem, 1);
  return {eform: eform};
}

function editGridsterItemDashboard(state: DynamicFormsState, gridsterItem: any) {
  const eform: any = JSON.parse(JSON.stringify(state.eform));
  eform.containers[state.indexContainer].dashboards[state.indexDashboard].gridsterItems[
    state.indexGridsterItem
    ] = gridsterItem;
  return {eform: eform};
}

function sortOutEntities(formDoctype: any) {
  const doctype: DocType = JSON.parse(JSON.stringify(formDoctype));
  const entitiesSimples: any = [];
  const entitiesMultiples: any = [];
  doctype.doctypes_entities?.map((e) => {
    if (e.entities?.is_unique) {
      entitiesSimples.push(e);
    } else {
      entitiesMultiples.push(e);
    }
  });
  return {entitiesSimples: entitiesSimples, entitiesMultiples: entitiesMultiples};
}

function addInContainer(state: any, container: Container) {
  const eform: Form = JSON.parse(JSON.stringify(state.eform));
  eform.containers?.push(container);
  return {eform: eform};
}

function deleteInContainer(state: any, indexContainer: any) {
  const eform: Form = JSON.parse(JSON.stringify(state.eform));
  eform.containers?.splice(indexContainer, 1);
  return {eform: eform};
}

function editInContainer(state: any, container: any, indexContainer: any) {
  const eform: Form = JSON.parse(JSON.stringify(state.eform));
  // @ts-ignore
  eform.containers[indexContainer] = JSON.parse(JSON.stringify(container));
  return {eform: eform};
}

function addInDashboard(state: any, dashboard: any, indexContainer: any) {
  const eform: Form = JSON.parse(JSON.stringify(state.eform));
  // @ts-ignore
  eform.containers[indexContainer].dashboards?.push(JSON.parse(JSON.stringify(dashboard)));
  return {eform: eform};
}

function editInDashboard(state: any, dashboard: any) {
  const eform: Form = JSON.parse(JSON.stringify(state.eform));
  // @ts-ignore
  eform.containers[state.indexContainer].dashboards[state.indexDashboard] = dashboard;
  return {eform: eform};
}

function deleteInDashboard(state: any, indexDashboard: any) {
  const eform: any = JSON.parse(JSON.stringify(state.eform));
  eform.containers[state.indexContainer].dashboards?.splice(indexDashboard, 1);
  return {eform: eform};
}

function addInGridsterItem(state: any, gridsterItem: any, indexContainer: any, indexDashboard: any) {
  const eform: any = JSON.parse(JSON.stringify(state.eform));
  eform.containers[indexContainer].dashboards[indexDashboard].gridsterItems?.push(gridsterItem);
  return {eform: eform};
}

export function DynamicFormsReducer(state: any, action: any) {
  return dynamicFormsReducer(state, action);
}
