export interface Dataset {
  id: string;
  name: string;
  description: string;
  field_type: string;
  max_length: number;
  outside: boolean;
  process: string;
}

export interface DatasetValue {
  id: number;
  code: number;
  sequence: number;
  value: string;
  description: string;
}
