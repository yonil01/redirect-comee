import {ChartType, ChartTypeRegistry} from "chart.js";
import {GridsterItem} from "angular-gridster2";

export interface EReport {
  id: string;
  name: string;
  type: string;
  parameters: ParametersEReport[];
  filters: any[];
  query: string;
}

export interface ParametersEReport {
  name: string;
  value: string;
  sequence: number
}

export interface EDashBoardReport {
  id: string;
  name: string;
  sheets: SheetEDashBoardReport[];
  reports_id: string[];
}

export interface SheetEDashBoardReport {
  id: string;
  filters: string[];
  charts: EConfigChart[];
  dashboards: GridsterItemEc[];
  report_id: string;
}

export interface GridsterItemEc extends GridsterItem {
  id: string;
  name: string;
  charType: ChartTypeEc;
  report_id: string;
}


export interface EConfigChart {
  id: string;
  type: ChartType;
  visualization: VisualizationChartEc;
  legend: boolean;
}

export interface VisualizationChartEc {
  label: { name: string, value: string }[];
  dataset: { name: string, value: string }[];
}


export type ChartTypeEc = keyof ChartTypeRegistryEc;

export interface ChartTypeRegistryEc extends ChartTypeRegistry {
  none: null
}
