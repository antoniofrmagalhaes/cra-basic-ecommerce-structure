/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { RiAddFill, RiDeleteBin6Line, RiSubtractLine } from 'react-icons/ri';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatPrice';

import {
  Container,
  TableHeader,
  Scroll,
  Table,
  DiscountTag,
  RemoveProductButton,
  RemoveAllProductsButton,
  CounterContainer,
} from './styles';

const CartList: React.FC = () => {
  const {
    cart,
    productsAmount,
    handleIncrementProduct,
    handleDecrementProduct,
    handleRemoveProduct,
    handleRemoveAllProducts,
  } = useCart();
  return (
    <Container>
      <TableHeader>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Produto</th>
              <th>Preço unitário</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th> </th>
            </tr>
          </thead>
        </table>
      </TableHeader>
      <Scroll>
        <Table>
          <tbody>
            {cart.products.map(product => (
              <tr>
                <td>
                  <img src={product.image} alt={product.name} />
                  <DiscountTag>
                    <span>-40%</span>
                  </DiscountTag>
                </td>
                <td>{product.name}</td>
                <td>{formatPrice(product.price)}</td>
                <td>
                  <CounterContainer>
                    <div onClick={() => handleDecrementProduct(product)}>
                      <RiSubtractLine />
                    </div>
                    <p>{productsAmount[product._id]}</p>
                    <div onClick={() => handleIncrementProduct(product)}>
                      <RiAddFill />
                    </div>
                  </CounterContainer>
                </td>
                <td>{formatPrice(product.price * product.amount)}</td>
                <td>
                  <RemoveProductButton
                    onClick={() => handleRemoveProduct(product._id)}
                  >
                    <RiDeleteBin6Line size={18} />
                  </RemoveProductButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Scroll>
      <RemoveAllProductsButton onClick={() => handleRemoveAllProducts()}>
        Remove all
      </RemoveAllProductsButton>
    </Container>
  );
};

export default CartList;
