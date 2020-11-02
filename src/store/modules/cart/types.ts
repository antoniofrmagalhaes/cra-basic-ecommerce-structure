export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_ALL_PRODUCTS = 'REMOVE_ALL_PRODUCTS';
export const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT';

/** Mongoose Product Schema */
export interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  amount: number;
}

export interface AddProduct {
  type: typeof ADD_PRODUCT;
  product: Product;
}

export interface RemoveProduct {
  type: typeof REMOVE_PRODUCT;
  _id: string;
}

export interface RemoveAllProducts {
  type: typeof REMOVE_ALL_PRODUCTS;
}

export interface UpdateAmount {
  type: typeof UPDATE_PRODUCT_AMOUNT;
  _id: string;
  amount: number;
}

export interface CartState {
  products: Product[];
}

export type OrderActionTypes =
  | AddProduct
  | RemoveProduct
  | RemoveAllProducts
  | UpdateAmount;
