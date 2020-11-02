import React from 'react';
import { v4 } from 'uuid';

import data from '../static/products';
import { Product } from '../store/modules/cart/types';

interface IProductsContextProps {
  products: Product[];
}

export const ProductsContext = React.createContext<IProductsContextProps>(
  {} as IProductsContextProps,
);

const ProductsProvider: React.FC = ({ children }) => {
  const products = useProvideProducts();
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): IProductsContextProps => {
  return React.useContext(ProductsContext);
};

export function useProvideProducts(): IProductsContextProps {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    async function setData() {
      setProducts(data.map(p => ({ ...p, _id: v4(), amount: 0 })));
    }
    setData();
  }, []);
  return {
    products,
  };
}

export default ProductsProvider;
