import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartState, Product } from '../store/modules/cart/types';
import { RootState } from '../store/modules/rootReducers';
import { formatPrice } from '../utils/formatPrice';

import {
  addProduct,
  removeProduct,
  removeAllProducts,
  updateProductAmount,
} from '../store/modules/cart/actions';

interface ProductsAmount {
  [key: string]: number;
}

interface ICartContextProps {
  handleAddProduct: (product: Product) => void;
  handleRemoveProduct: (_id: string) => void;
  handleRemoveAllProducts: () => void;
  handleIncrementProduct: (product: Product) => void;
  handleDecrementProduct: (product: Product) => void;
  cart: CartState;
  length: number;
  productsAmount: ProductsAmount;
  subtotal: string;
  tax: string;
  deliveryFee: string;
  total: string;
  isOpen: boolean;
  handleOpenCart: () => void;
  handleCloseCart: () => void;
}

export const CartContext = React.createContext<ICartContextProps>(
  {} as ICartContextProps,
);

const CartProvider: React.FC = ({ children }) => {
  const cart = useProvideCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCart = (): ICartContextProps => {
  return React.useContext(CartContext);
};

export function useProvideCart(): ICartContextProps {
  const [isOpen, setIsOpen] = React.useState(false);
  const [taxValue] = React.useState(0);
  const [deliveryFeeValue] = React.useState(14.9);
  const dispatch = useDispatch();
  const cart = useSelector<RootState, CartState>(state => state.cart);
  const tax = formatPrice(taxValue);
  const deliveryFee = formatPrice(deliveryFeeValue);
  const subtotal = formatPrice(
    cart.products.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0),
  );
  const total = formatPrice(
    cart.products.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0) +
      taxValue +
      deliveryFeeValue,
  );
  const { length } = cart.products;

  const handleAddProduct = async (product: Product): Promise<void> => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = async (_id: string): Promise<void> => {
    dispatch(removeProduct(_id));
  };

  const handleRemoveAllProducts = async (): Promise<void> => {
    dispatch(removeAllProducts());
  };

  const handleIncrementProduct = async (product: Product): Promise<void> => {
    dispatch(updateProductAmount(product._id, product.amount + 1));
  };

  const handleDecrementProduct = async (product: Product): Promise<void> => {
    if (product.amount === 1) return;
    dispatch(updateProductAmount(product._id, product.amount - 1));
  };

  const getProductsAmount = () => {
    return cart.products.reduce<ProductsAmount>((amount, product) => {
      amount[product._id] = product.amount;
      return amount;
    }, {});
  };

  return {
    handleAddProduct,
    handleRemoveProduct,
    handleRemoveAllProducts,
    handleIncrementProduct,
    handleDecrementProduct,
    productsAmount: getProductsAmount(),
    cart,
    length,
    subtotal,
    tax,
    deliveryFee,
    total,
    isOpen,
    handleOpenCart: () => setIsOpen(true),
    handleCloseCart: () => setIsOpen(false),
  };
}

export default CartProvider;
