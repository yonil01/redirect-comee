export interface Module {
  id: string;
  name: string;
  description: string;
  class: string;
  type: number;
  components: Component[];
  created_at: string;
  updated_at: string;
}

export interface Component {
  id: string;
  name: string;
  url_front: string;
  class: string;
  module_id: string;
  elements: Element[];
}

export interface Element {
  id: string;
  name: string;
  description: string;
  url_back: string;
  component_id: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  department: string;
  email: string;
  phone: string;
  product_owner: string;
  customers_id: string;
}

export interface Components {
  name: string;
  active: boolean;
}
