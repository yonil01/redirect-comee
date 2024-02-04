import { createAction, props } from '@ngrx/store';
import {EDashBoardReport} from "@app/core/models/modules/e-dashboard/e-dashboard.model";

export const controlEDashboard = createAction('[edsb] setEDashboard', props<{ eDashBoardReport: EDashBoardReport }>());
