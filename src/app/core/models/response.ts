import {Attribute} from "@app/core/models/config/entities";

export interface Response<T = any> {
  error: boolean;
  data: T;
  code: number;
  msg: string;
  type: string;
  token?: string;
  errors?: any;
}

export interface EntityGetEntity {
  id:         string;
  name:       string;
  attributes: Attribute[];
}

export interface AttributeGetEntity {
  id:          string;
  name:        string;
  description: string;
}
