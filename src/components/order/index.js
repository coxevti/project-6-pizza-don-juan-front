import React, { Component } from 'react';

import { Container, OrderList, ProductsList } from './styles';

class Order extends Component {
  render() {
    return (
      <Container>
        <h1>Últimos pedidos</h1>
        <OrderList>
          <header>
            <h1>
              Pedido
              {' '}
              <span>#3</span>
              {' '}
- Diego Schell Fernandes
            </h1>
            <h2>há 2 segundos</h2>
            <span>R$ 42,00</span>
          </header>
          <ProductsList>
            <li>
              <img
                src="https://pedacodapizza.com/wp-content/uploads/2017/03/icone-pizza-3-sabores-80x80.png"
                alt="logo"
              />
              <div>
                <h1>Pizza Calabresa</h1>
                <h2>Tamanho: Média</h2>
              </div>
            </li>
            <li>
              <img
                src="https://pedacodapizza.com/wp-content/uploads/2017/03/icone-pizza-3-sabores-80x80.png"
                alt="logo"
              />
              <div>
                <h1>Pizza Calabresa</h1>
                <h2>Tamanho: Média</h2>
              </div>
            </li>
            <li>
              <img
                src="https://pedacodapizza.com/wp-content/uploads/2017/03/icone-pizza-3-sabores-80x80.png"
                alt="logo"
              />
              <div>
                <h1>Pizza Calabresa</h1>
                <h2>Tamanho: Média</h2>
              </div>
            </li>
            <li>
              <img
                src="https://pedacodapizza.com/wp-content/uploads/2017/03/icone-pizza-3-sabores-80x80.png"
                alt="logo"
              />
              <div>
                <h1>Pizza Calabresa</h1>
                <h2>Tamanho: Média</h2>
              </div>
            </li>
            <li>
              <img
                src="https://pedacodapizza.com/wp-content/uploads/2017/03/icone-pizza-3-sabores-80x80.png"
                alt="logo"
              />
              <div>
                <h1>Pizza Calabresa</h1>
                <h2>Tamanho: Média</h2>
              </div>
            </li>
          </ProductsList>
          <p>
            <span>Observações: </span>
            {' '}
Favor remover o tomate da pizza.
          </p>
        </OrderList>
      </Container>
    );
  }
}

export default Order;
