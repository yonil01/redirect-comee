import {Entities, Module, Role} from '../index';

export interface User {
  id?: string;
  username?: string;
  name?: string;
  last_name?: string;
  password?: string;
  password_confirm?: string;
  roles?: Role[];
  logged_users?: LoggedUsers[];
  email_notifications?: string;
  status?: string;
  client_id?: number;
  real_ip?: string;
  host_name?: string;
  time_out?: number;
  failed_attempts?: number;
  last_change_password?: Date;
  block_date?: Date;
  disabled_date?: Date;
  change_password?: boolean;
  change_password_days_left?: number;
  last_login?: Date;
  modules?: Module[];
  token?: string;
  created_at?: string;
  updated_at?: string;
  identification_number?: string;
  identification_type?: string;
  security_entities?: UsersSecurityEntity[];
}

export interface UserNewModel {
  id: string;
  username: string;
  name: string;
  last_name: string;
  email_notifications: string;
  identification_number: string;
  identification_type: string;
  status?: number;
  failed_attempts?: number;
  last_change_password?: string;
  block_date?: string;
  disabled_date?: string;
  change_password?: boolean;
  change_password_days_left?: number;
  time_out?: number;
  last_login: string;
  roles: Role[];
  logged_users: LoggedUsers[];
  security_entities?: UsersSecurityEntity[];
  created_at?: string;
  updated_at?: string;
}

export interface LoggedUsers {
  id: string;
  event: string;
  host_name?: string;
  ip_remote?: string;
  created_at?: string;
}

export interface PasswordHistory {
  password?: string;
  created_at?: Date;
}

export interface UsersSecurityEntity {
  id: string;
  entity?: Entities;
  attributes: AttributesUser [];
 }

 export interface AttributesUser {
   entidad?: string;
   id: string;
   value: string;
   enable?: boolean;
 }
 export interface SecurityEntity {
  id?: string;
  role_allow?: [];
  attributes: AttributesUser[];
 }
