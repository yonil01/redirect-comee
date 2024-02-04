export interface Required {
  id: string;
  name: string;
  required_doctypes: RequiredDocTypes[];
  required_attributes_common: RequiredAttributeCommon[];
  version: number;
  is_active: boolean;
}

export interface RequiredAttributeCommon {
  id: string;
  required_id: string
  attribute_id: string;
}


export interface RequiredDocTypes {
  id: string;
  doctype_related_id: string;
  is_required: boolean;
  required_attributes: RequiredAttribute[];
}

export interface RequiredAttribute {
  id: string;
  entity_id: string;
  attribute_id: string;
  value: string;
}
