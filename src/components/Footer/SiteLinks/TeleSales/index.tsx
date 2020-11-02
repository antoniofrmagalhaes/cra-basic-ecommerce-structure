import React from 'react';
import { RiPhoneLine } from 'react-icons/ri';

import { Title, Content } from './styles';

const TeleSales: React.FC = () => {
  return (
    <>
      <Title>Compre pelo telefone</Title>
      <Content>
        <div>
          <p>Para regiões metropolitanas:</p>
          <button type="button">
            <RiPhoneLine />
            3351-7548
          </button>
        </div>
        <div>
          <p>Para demais regiões:</p>
          <button type="button">
            <RiPhoneLine />
            3351-7548
          </button>
        </div>
        <p>
          Horário de atendimento:
          <strong>De segunda a sexta, das 09h às 17h</strong>
          Horário de Brasília
        </p>
      </Content>
    </>
  );
};

export default TeleSales;
