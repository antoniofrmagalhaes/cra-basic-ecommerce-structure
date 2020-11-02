import React from 'react';

import LinkGroup from './LinkGroup';
import TeleSales from './TeleSales';

import { Container } from './styles';

const SiteLinks: React.FC = () => {
  return (
    <Container>
      <li>
        <LinkGroup label="Atendimento">
          <a href="/">Minha conta</a>
          <a href="/">Meus pedidos</a>
          <a href="/">Encontre uma loja</a>
          <a href="/">Central de Atendimento</a>
          <a href="/">Perguntas frequentes</a>
        </LinkGroup>
      </li>
      <li>
        <LinkGroup label="Serviços">
          <a href="/">Minhas listas</a>
        </LinkGroup>
      </li>
      <li>
        <LinkGroup label="Institucional">
          <a href="/">Trabalhe conosco</a>
          <a href="/">CyberDefense</a>
          <a href="/">Nosso Blog</a>
          <a href="/">Produtos mais buscados</a>
          <a href="/">Mapa de Produtos</a>
        </LinkGroup>
      </li>
      <li>
        <LinkGroup label="Politicas da Loja">
          <a href="/">Política de entregas</a>
          <a href="/">Política de Trocas e Devoluções</a>
          <a href="/">Política de Cancelamentos</a>
          <a href="/">Políticas Click & Retire Alimentar</a>
          <a href="/">
            Política de Retirada, Cancelamento,
            <span> Trocas e Devoluções de Retire em Loja</span>
          </a>
          <a href="/">Termos de Uso</a>
          <a href="/">Central de Privacidade</a>
          <a href="/">Políticas de Privacidade</a>
        </LinkGroup>
      </li>
      <li>
        <TeleSales />
      </li>
    </Container>
  );
};

export default SiteLinks;
