import {createReducer, on} from '@ngrx/store';
import {
  controlEDashboard
} from "@app/core/store/actions/e-dashboard.action";
import {EDashBoardReport} from "@app/core/models/modules/e-dashboard/e-dashboard.model";
export interface EDashboardState {
  eDashBoardReport: EDashBoardReport;
}

export const DashboardInitialState: EDashboardState = {
  eDashBoardReport: {id: ''} as EDashBoardReport,
};

const eDashboardReducer = createReducer(
  DashboardInitialState,
  on(controlEDashboard, (state, {eDashBoardReport}) => ({
    ...state,
    eDashBoardReport: eDashBoardReport
  })),
);

export function EDashboardReducer(state: any, action: any) {
  return eDashboardReducer(state, action);
}

