import {FormGroup} from "@angular/forms";
import {Attribute, Param, RuleParam} from "@app/core/models";

export interface DynamicFormModel {
  header: Header;
  groups: Groups;
  stylesGlobal: StylesGlobal;
  executions: ExecutionDF[];
}

export interface Groups {
  multiple: boolean;
  layout: Layout;
  group: Group[];
}

export interface Group {
  id: string;
  name: string;
  sequence: number;
  info: Info;
  layout: Layout;
  sections: Sections;
  events: any;
}

export interface Info {
  layout: Layout;
  title: Description;
  description: Description;
  sequence: number;
}

export interface Description {
  text: string;
  style: string;
  sequence: number;
}

export interface Layout {
  distribution: string;
  orientation: string;
  gap: string;
  align: string;
  justify: string;
}

export interface Sections {
  multiple: boolean;
  layout: Layout;
  section: Section[];
}

export interface Section {
  id: string;
  name: string;
  sequence: number;
  info: Info;
  layout: Layout;
  form_entities: FormEntity[];
  form_docs_required: FormDocRequired[];
  form_policies: FormPolicies[];
  show: boolean;
}

export interface FormEntity {
  id: string;
  name: string;
  description: string;
  sequence: number;
  style: string;
  attributes?: Attribute[],
  is_unique: boolean;
  form: FormGroup;
  show: boolean;

  show_buttons_entity_multiple: boolean;
  show_button_add_entity_multiple: boolean;
  show_button_delete_entity_multiple: boolean;
  reset_form: true;
}

export interface FormDocRequired {
  id: string;
  name: string;
  sequence: number;
  style: string;
  doctype: any;
  doctype_related_id: string;

  is_required: boolean;
  show: boolean;
  disabled: boolean;
}

export interface FormPolicies {
  id: string;
  label: string;
  title: string;
  description: string;
  is_modal: boolean;
  is_required: boolean;
  selected: boolean;
  show: boolean;
}

export interface Header {
  layout: Layout;
  info: Info;
  brand: Brand;
}

export interface Brand {
  img: string;
  size: string;
  sequence: number;
}

export interface StylesGlobal {
  theme: string;
  rounded_ui: string;
  primary: string;
  secondary_palette: string;
  font_title: string;
  font_body: string;
}


export interface AttributeModel {
  dataset: boolean;
  datasetData?: any;
  description: string;
  disabled: boolean;
  entities_attributes_autofills: any;
  entities_attributes_cascading_dataset: any;
  entities_attributes_dataset: DataSetEntityModel;
  entities_id: string;
  field_types: string;
  hidden: boolean;
  id: string;
  is_cipher: boolean;
  is_index: boolean;
  mask: string;
  max_length: number;
  min_length: number;
  name: string;
  regex: string;
  required: boolean;
  sequence: number;
  contador?: number;
  tag_html: string;
  type: string;
  validation: string;
  hooks?: any;
}

export interface DataSetEntityModel {
  id: string;
  name: string;
}

export interface ExecutionDF {
  id: string;
  name: string;
  type: string;
  active: boolean;
  rules: RuleDF[];
}

export interface RuleDF {
  id: string;
  code: number;
  name: string;
  status: boolean;
  first: number;
  child_true: number;
  child_false: number;
  action: string;
  itemtype_id: number;
  execution_id: string;
  description: string;
  params: Param[];
  rule_params: RuleParam[];
}

