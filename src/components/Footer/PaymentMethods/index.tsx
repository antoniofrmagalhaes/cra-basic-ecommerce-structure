import React from 'react';

import mastercard from '../../../assets/images/master-card.webp';
import visa from '../../../assets/images/visa.webp';
import boleto from '../../../assets/images/boleto.webp';

import { Container } from './styles';

const PaymentMethods: React.FC = () => {
  return (
    <Container>
      <strong>Formas de pagamento</strong>
      <div>
        <img src={mastercard} alt="master-card" />
        <img src={visa} alt="visa" />
        <img src={boleto} alt="elo" />
      </div>
    </Container>
  );
};

export default PaymentMethods;
