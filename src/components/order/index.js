import React, { Component } from 'react';

import { Container, OrderList, ProductsList } from './styles';

class Order extends Component {
  render() {
    return (
      <Container>
        <h1>Últimos pedidos</h1>
        <OrderList>
          <header>
            <h1>Pedido <b>#2</b> - Diego Schell Fernandes</h1>
            <h2>há 2 segundos</h2>
            <span>R$ 42,00</span>
          </header>
          <ProductsList>
            <li>
              <img
                src="http://galeriadospaes.com.br/wp-content/uploads/2017/11/foto_do_produto_139.jpg"
                alt="logo"
              />
              <div>
                <h1>Pizza Calabresa</h1>
                <h2>Tamanho: Média</h2>
              </div>
            </li>
          </ProductsList>
          <p>
            <b>Observações:</b> Favor remover o tomate da pizza.
          </p>
        </OrderList>
        <OrderList>
          <header>
            <h1>Pedido <b>#1</b> - Diego Schell Fernandes</h1>
            <h2>há 2 segundos</h2>
            <span>R$ 36,00</span>
          </header>
          <ProductsList>
            <li>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/0a/45/dc/51/pizza-portuguesa.jpg"
                alt="logo"
              />
              <div>
                <h1>Pizza Calabresa</h1>
                <h2>Tamanho: Média</h2>
              </div>
            </li>
          </ProductsList>
          <p>
            <b>Observações:</b> Favor remover o tomate da pizza.
          </p>
        </OrderList>
      </Container>
    );
  }
}

export default Order;
