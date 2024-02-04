import {DocType, Role, Attribute, QueueComment, Project} from '@app/core/models';
import {Token} from '../token/token';
import {QueueCapture, QueueDoctype, ParamsCapture} from "@app/core/models/capture-workflow/queue-capture.model";

export interface Process {
  id: string;
  name: string;
  description: string;
  process_root: string;
  class: string;
  ans: number;
  percent_alert: number;
  type_process: number;
  status: number;
  project: Project;
  document_id_bpmn?: number;
  document_id_svg?: number;
  document_id_ans?: number;
  version: number;
  is_locked: boolean;
  locked_info: string;
  is_published?: boolean;
  user_deleted: string;
  process_doctypes?: ProcessDoctype[];
  queues?: Queue[];
  process_roles?: ProcessRole[];
  tokens?: Token[];
  created_at?: Date;
  updated_at?: Date;
}

export interface ExecutionComment {
  id: string;
  comment: string;
}

export interface Queue {
  id: string;
  name: string;
  sequences: number;
  type: number;
  balance_type: number;
  class: string;
  ans: number;
  percent_alert: number;
  status: number;
  id_bpmn_element: string;
  must_confirm_comment: boolean;
  description: string;
  comments: QueueComment[]; //todo revisar modelo
  queue_attributes: QueueAttribute[];
  executions: Execution[];
  queue_roles: any[];
  queue_capture?: QueueCapture;
  params_capture: ParamsCapture[];
  queue_doctype?: QueueDoctype[];
  is_execution_activity?: boolean;
  id_execution_activity?: string;
  id_activity_rebalancing?: string;
  created_at: string;
  updated_at: string;
}

export interface Execution {
  id: string;
  name: string;
  type: number;
  timer?: Timer;
  class: string;
  description: string;
  must_confirm_comment?: string;
  comment_attribute_id?: string;
  comment_dataset_id?: string;
  execution_roles?: ExecutionRole[];
  rules?: Rule[];
  comments: ExecutionComment[];
}

export class Timer {
  name?: string;
  frequency?: number;
  day_of_week?: string;
  day_of_month?: string;
  begin_at?: string;
  end_at?: string;
  enabled?: boolean;
  is_not_running?: boolean;
  last_execution?: Date;

  constructor(
    name: string,
    freq: number,
    dayWeek: string,
    dayMonth: string,
    beginAt: string,
    endAt: string,
    enable: boolean,
  ) {
    this.name = name;
    this.frequency = freq;
    this.day_of_week = dayWeek;
    this.day_of_month = dayMonth;
    this.begin_at = beginAt;
    this.end_at = endAt;
    this.enabled = enable;
  }
}

export interface QueueRolesModel {
  id: string;
  role: RoleModel;
}

export interface RoleModel {
  id: string;
  name: string;
}

export interface Rule {
  id?: string;
  code: number;
  name?: string;
  first?: number;
  child_true: number;
  child_false: number;
  action: string;
  itemtype_id?: number;
  execution_id?: string;
  description?: string;
  params?: Param[];
  rule_params?: RuleParam[];
}

export interface Param {
  id?: string;
  rule_id?: string;
  name?: string;
  value?: string;
}

export interface RuleParam {
  id?: string,
  name: string,
  value: string,
  type_param?: string,
}

export interface ProcessRole {
  id: string;
  role: Role;
}

export interface ProcessDoctype {
  id: string;
  doctype: DocType;
}

export interface QueueRole {
  id?: string;
  queue_id?: string;
  role_id?: string;
  role?: Role;
}

export interface QueueAttribute {
  id: string;
  attribute: Attribute;
}

export interface ExecutionRole {
  id?: string;
  execution_id?: string;
  role_id?: string;
  role?: Role;
}

export interface QueuePagination extends Queue {
  documents: number; //todo revisar!
}
