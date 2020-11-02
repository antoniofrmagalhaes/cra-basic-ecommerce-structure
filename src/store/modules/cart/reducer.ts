import produce from 'immer';
import { AnyAction, Reducer } from 'redux';

import {
  ADD_PRODUCT,
  CartState,
  REMOVE_ALL_PRODUCTS,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT_AMOUNT,
} from './types';

const initialState: CartState = {
  products: [],
};

const cart: Reducer<CartState, AnyAction> = (
  state = initialState,
  action,
): CartState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          p => p._id === action.product._id,
        );
        if (productIndex >= 0) {
          draft.products[productIndex].amount += 1;
        } else {
          draft.products.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case REMOVE_PRODUCT:
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          p => p._id === action._id,
        );
        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });

    case REMOVE_ALL_PRODUCTS:
      return produce(state, draft => {
        draft.products = [];
      });

    case UPDATE_PRODUCT_AMOUNT:
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          p => p._id === action._id,
        );
        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
        }
      });

    default:
      return state;
  }
};

export default cart;
