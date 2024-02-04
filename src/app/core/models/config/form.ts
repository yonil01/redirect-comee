import { Entities } from '@app/core/models';
import { Attribute } from './entities';

export interface Form {
  doctype?: string;
  type?: string; // step, tab, normal
  containers?: Container[];
}

export interface Container {
  name?: string;
  type?: string; // step, tab, normal
  dashboards?: Dashboard[];
}

export interface Dashboard {
  gridsterItems?: any[];
  options?: Safe;
  entity?: Entities;
  gridster?: any;
}

export interface Safe {
  draggable: any;
  resizable: any;
  pushDirections: any;
}

export interface Formly {
  type: string; // form or steps
  orientationSteps?: string;
  steps?: StepType[];
  modelId?: string;
  isUnique?: boolean;
  forms?: any[];
}

export interface StepType {
  label: string;
  formlyList: Formly[];
}

export interface FunctionsDefinition {
  functions?: string[];
  entity?: Entities;
  attribute?: Attribute;
}

export interface FunctionData {
  func?: Function;
  entity?: Entities;
  attribute?: Attribute;
}
