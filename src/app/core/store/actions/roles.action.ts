import { createAction, props } from '@ngrx/store';
import {
  Role,
  SecurityEntities,
  RolesDateDisallowed,
  RolesPasswordPolicy,
  Attributes,
  RolesDoctype,
  RolesAllow,
  RolesSecurityEntity,
  RolesAttribute, RolesElement,
} from '@app/core/models';

export const controlRole = createAction('[Role] load role', props<{ role: Role; index: number }>());

export const controlSecurtitys = createAction(
  '[SecurityEntities] load security',
  props<{ security: SecurityEntities[] }>(),
);

export const showRole = createAction('[Role] show role', props<{ operation: string }>());

export const showAtribRole = createAction('[Role] show atribRole', props<{ operation: string }>());

export const cancelAddRole = createAction('[Role] cancel add role');

export const controlRoles = createAction('[Role] load roles', props<{ roles: Role[] }>());

export const updateRole = createAction('[role] update role', props<{ role: Role }>());

export const deleteRole = createAction('[Role] delete role', props<{ indexRole: number }>());

export const updateSecurityEntities = createAction(
  '[role] update SecurityEntities',
  props<{ securityEntities: SecurityEntities[] }>(),
);

export const savedRole = createAction('[Role] save role');
export const controlSecurityentities = createAction(
  '[SecurityEntities] load SecurityEntities',
  props<{ index: number }>(),
);

// Rol
export const addRole = createAction('[role] add role', props<{ role: Role }>());

export const editRole = createAction('[Role] edit role', props<{ role: Role }>());

// Date Disallowed
export const controlDatedisallowed = createAction('[DateDisallowed] load datedisallowed', props<{ index: number }>());

export const addDatedisallowed = createAction(
  '[DateDisallowed] add datedisallowed',
  props<{ datedisallowed: RolesDateDisallowed }>(),
);

export const updateDatedisallowed = createAction(
  '[DateDisallowed] update datedisallowed',
  props<{ datedisallowed: RolesDateDisallowed }>(),
);

export const deleteDatedisallowed = createAction('[DateDisallowed] delete datedisallowed', props<{ index: number }>());

// Agregar Politicas de Seguridad - PasswordPolicy
export const addPasswordPolicy = createAction('[role] add passwordpolicy', props<{ passwordpolicy: RolesPasswordPolicy }>());

export const deletePasswordPolicy = createAction('[PasswordPolicy] delete passwordpolicy', props<any>());

// Element
export const addElement = createAction('[role] add element', props<{ element: RolesElement }>());

export const deleteRoleElement = createAction('[role] delete roleelement', props<{ indexRoleElement: number }>());

// SecurityEntities
export const addSecurityEntities = createAction(
  '[role] add securityentities',
  props<{ securityEntities: RolesSecurityEntity }>(),
);

export const editSecurity = createAction('[SecurityEntities] edit security', props<{ securityEntities: RolesAttribute }>());

export const deleteSecurity = createAction('[SecurityEntities] delete security', props<{ index: number }>());

// Doctype
export const addDoctype = createAction('[role] add project', props<{ doctype: RolesDoctype []}>());

export const deleteRoleDocType = createAction('[role] delete roledoctype', props<{ indexRoleDocType: number }>());

// Agregar roleAllow
export const addRoleAllow = createAction('[RoleAllowed] add roleallow', props<{ rolleallow: RolesAllow[] }>());

export const deleteRoleAllow = createAction('[RoleAllowed] delete roleallow', props<{ indexRoleAllow: number }>());

// Agregar Atributos Entidades
export const addAttribute = createAction('[Attributes] add Attribute', props<{ attribute: Attributes[] }>());

export const updateAtrribute = createAction(
  '[Attributes] update attribute',
  props<{ attribute: RolesAttribute; indexRoleAtribu: number }>(),
);

export const deleteAtrribute = createAction('[Attributes] delete attribute', props<{ indexRoleAtribu: number }>());
