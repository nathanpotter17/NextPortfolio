export interface Hello {
  str: string;
}

export interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface Product {
  id: string;
  object: string;
  active: boolean;
  created: number;
  default_price: string | null;
  description: string | null;
  images: string[];
  marketing_features: any[];
  livemode: boolean;
  metadata: Record<string, any>;
  name: string;
  package_dimensions: any | null;
  price: string;
  shippable: boolean | null;
  statement_descriptor: string | null;
  tax_code: string | null;
  unit_label: string | null;
  updated: number;
  url: string | null;
  seller?: boolean;
  bundle?: boolean;
  moq?: string;
  moq2: string;
}

export interface ProductListResponse {
  products: Product[];
}
