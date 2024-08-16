export type Client = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  gstNumber: string;
  postalCode: string;
  [key: string]: string;
};

export type Company = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  gstNumber: string;
  postalCode: string;
  [key: string]: string;
};

export type OrderItem = {
  id: string;
  name: string;
  gsm: string;
  quantity: string;
  isUrgent: boolean;
  sizeA: string;
  sizeB: string;
  sizeAUnit: string;
  sizeBUnit: string;
  [key: string]: string | number | boolean;
};
