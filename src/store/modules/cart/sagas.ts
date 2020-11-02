import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { takeLatest, all } from 'redux-saga/effects';

import { ADD_PRODUCT } from './types';

export function addProduct({ product }: AnyAction): void {
  toast.info(`${product.name} added to cart.`);
}

export default all([takeLatest(ADD_PRODUCT, addProduct)]);
