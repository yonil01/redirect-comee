export interface Dataset {
  id: string;
  name: string;
  description: string;
  field_type: string;
  max_length: number;
  outside: boolean;
  process: string;
  created_at: string;
  updated_at: string;
}

export interface DatasetValue {
  id?: number;
  code?: number;
  sequence?: number;
  value?: string;
  description?: string;
  dataset_id?: string;
}
