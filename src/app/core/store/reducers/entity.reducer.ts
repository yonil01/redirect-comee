import { Entities, Attribute, Dataset } from '@app/core/models';
import { createReducer, on } from '@ngrx/store';
import { cancelDatasets, savedEntity, editAutofill, editCascadingdt, deleteAttribute } from '../actions/entity.action';
import {
  controlAttribute,
  showEntity,
  cancelAttribute,
  editAttribute,
  addAttribute,
  controlDatasets,
  editDatasets,
} from '../actions/entity.action';
import {
  controlEntity,
  editEntity,
  cancelEditEnty,
  controlEntities,
  addEntity,
} from '@app/core/store/actions/entity.action';

export interface EntityState {
  entity: Entities;
  entities: Entities[];
  indexEntity: number;
  isShowEntity: boolean;

  operation: string;

  attribute: Attribute;
  isShowAttribute: boolean;
  indexAttribute: number;
  datasets: Dataset[];
  isShowDatasets: boolean;
}

export const EntityInitialState: EntityState = {
  entity: {} as Entities,
  entities: [],
  indexEntity: 0,
  isShowEntity: false,

  operation: '',

  attribute: {} as Attribute,
  indexAttribute: 0,
  isShowAttribute: false,
  datasets: [],
  isShowDatasets: false,
};

const entityReducer = createReducer(
  EntityInitialState,
  on(controlEntity, (state, { entity, index }) => ({
    ...state,
    isShowEntity: false,
    indexEntity: index,
    entity,
    operation: '',
  })),

  on(showEntity, (state, { operation }) => ({
    ...state,
    isShowEntity: true,
    operation,
  })),

  on(controlEntities, (state, { entities }) => ({
    ...state,
    isShowEntity: false,
    entities,
  })),

  on(editEntity, (state, { entity }) => ({
    ...state,
    isShowEntity: false,
    entity: { ...entity },
    entities: updateEntities(state.entities, state.indexEntity, entity),
    operation: '',
  })),

  on(addEntity, (state, { entity }) => ({
    ...state,
    isShowEntity: false,
    entity: { ...entity },
    entities: [...state.entities, entity],
    indexEntity: state.entities.length,
    operation: '',
  })),

  on(cancelEditEnty, (state) => ({
    ...state,
    isShowEntity: false,
  })),

  on(controlAttribute, (state, { attribute, index, operation }) => ({
    ...state,
    isShowAttribute: true,
    indexAttribute: index,
    attribute: attribute ? { ...attribute } : {} as Attribute,
    operation,
  })),

  on(editAttribute, (state, { attribute }) => ({
    ...state,
    isShowAttribute: false,
    attribute: {} as Attribute,
    ...updateInAttributes(state.entities, state.indexEntity, state.indexAttribute, attribute),
    operation: '',
  })),

  on(addAttribute, (state, { attribute }) => ({
    ...state,
    isShowAttribute: false,
    attribute: {} as Attribute,
    ...addInAttributes(state.entities, state.indexEntity, attribute),
    operation: '',
  })),

  on(deleteAttribute, (state, { indexAttribute }) => ({
    ...state,
    ...deleteInAttributes(state.entities, state.indexEntity, indexAttribute),
    operation: '',
  })),

  on(cancelAttribute, (state) => ({
    ...state,
    isShowAttribute: false,
    attribute: {} as Attribute,
  })),

  on(controlDatasets, (state, { datasets, index }) => ({
    ...state,
    isShowDatasets: true,
    indexAttribute: index,
    datasets: [...datasets],
  })),

  on(editDatasets, (state, { datasets }) => ({
    ...state,
    isShowDatasets: false,
    attribute: {} as Attribute,
    datasets: [],
    ...updateDatasets(state.entities, state.indexEntity, state.indexAttribute, datasets),
    operation: '',
  })),

  on(cancelDatasets, (state) => ({
    ...state,
    isShowDatasets: false,
    datasets: [],
  })),

  on(editAutofill, (state, { autofills, indexAttribute }) => ({
    ...state,
    ...updateAutofill(state.entities, state.indexEntity, indexAttribute, autofills),
  })),

  on(editCascadingdt, (state, { cascadingdt, indexAttribute }) => ({
    ...state,
    ...updateCascadingdt(state.entities, state.indexEntity, indexAttribute, cascadingdt),
  })),

  on(savedEntity, (state) => ({
    ...state,
    ...saveEntity(state.entities, state.indexEntity),
  })),
);

export function EntityReducer(state: any, action: any) {
  return entityReducer(state, action);
}

function updateEntities(entities: Entities[], index: number, entity: Entities) {
  const entitiesList: Entities[] = JSON.parse(JSON.stringify(entities));
  entitiesList[index] = entity;
  return entitiesList;
}

function updateInAttributes(entities: Entities[], indexEntity: number, indexAttribute: number, attribute: Attribute) {
  const entitiesList: any[] = JSON.parse(JSON.stringify(entities));
  entitiesList[indexEntity].attributes[indexAttribute] = attribute;
  return { entities: entitiesList, entity: entitiesList[indexEntity] };
}

function addInAttributes(entities: Entities[], indexEntity: number, attribute: Attribute) {
  const entitiesList: any[] = JSON.parse(JSON.stringify(entities));
  entitiesList[indexEntity].attributes = entitiesList[indexEntity].attributes ? entitiesList[indexEntity].attributes : [];
  entitiesList[indexEntity].attributes = [...entitiesList[indexEntity].attributes, attribute];
  return { entities: entitiesList, entity: entitiesList[indexEntity] };
}

function deleteInAttributes(entities: Entities[], indexEntity: number, indexAttribute: number) {
  const entitiesList: Entities[] = JSON.parse(JSON.stringify(entities));
  entitiesList[indexEntity].attributes?.splice(indexAttribute, 1);
  return { entities: entitiesList, entity: entitiesList[indexEntity] };
}

function updateDatasets(entities: Entities[], indexEntity: number, indexAttribute: number, datasets: Dataset[]) {
  const entitiesList: Entities[] = JSON.parse(JSON.stringify(entities));
  // entitiesList[indexEntity].attributes[indexAttribute].data_sets = datasets;
  return { entities: entitiesList, entity: entitiesList[indexEntity] };
}

function saveEntity(entities: Entities[], indexEntity: number) {
  const entitiesList: Entities[] = JSON.parse(JSON.stringify(entities));
  return { entities: entitiesList, entity: entitiesList[indexEntity] };
}

function updateAutofill(entities: Entities[], indexEntity: number, indexAttribute: number, autofills: string[]) {
  const entitiesList: any[] = JSON.parse(JSON.stringify(entities));
  entitiesList[indexEntity].attributes[indexAttribute].autofill = autofills;
  return { entities: entitiesList, entity: entitiesList[indexEntity] };
}

function updateCascadingdt(entities: Entities[], indexEntity: number, indexAttribute: number, cascadingdt: string[]) {
  const entitiesList: any[] = JSON.parse(JSON.stringify(entities));
  entitiesList[indexEntity].attributes[indexAttribute].cascading_datasets = cascadingdt;
  return { entities: entitiesList, entity: entitiesList[indexEntity] };
}
