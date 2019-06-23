import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { parseISO, formatDistanceStrict } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import OrderActions from '~/store/ducks/order';

import { Container, OrderList, ProductsList } from './styles';

class Order extends Component {
  static propTypes = {
    allOrdersRequest: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      created_at: PropTypes.string,
      observation: PropTypes.string,
      user: PropTypes.shape({
        fullname: PropTypes.string,
      }),
      orderProduct: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    })).isRequired,
  }

  componentDidMount() {
    const { allOrdersRequest } = this.props;
    allOrdersRequest();
  }

  render() {
    const { orders } = this.props;
    return (
      <Container>
        <h1>Últimos pedidos</h1>
        {orders.map(order => (
          <OrderList key={order.id}>
            <header>
              <h1>Pedido <b>#{order.id}</b> - {order.user.fullname}</h1>
              <h2>{order.created_at}</h2>
              <span>R$ {order.priceTotal}</span>
            </header>
            <ProductsList>
              {order.orderProduct.map(productList => (
                <li key={productList.id}>
                  <img
                    src={`http://127.0.0.1:3333/files/${productList.sizeType[0].type[0].thumbnail}`}
                    alt="logo"
                  />
                  <div>
                    <h1>{productList.product[0].name} {productList.sizeType[0].type[0].name}</h1>
                    <h2>{productList.sizeType[0].size[0].name}</h2>
                  </div>
                </li>
              ))}
            </ProductsList>
            <p>
              <b>Observações:</b> {order.observation}
            </p>
          </OrderList>
        ))}
      </Container>
    );
  }
}

function addFormatDistanceStrict(date) {
  return formatDistanceStrict(
    parseISO(date),
    Date.now(),
    { addSuffix: true, locale: ptBR },
  );
}

function addPriceTotalOrders({ data }) {
  if (data.length === 0) return [];
  return data.map((order) => {
    const price = order.orderProduct.map(priceProduct => priceProduct.sizeType[0].price);
    return {
      ...order,
      created_at: addFormatDistanceStrict(order.created_at),
      priceTotal: price.reduce((acc, current) => acc + current, 0),
    };
  });
}

const mapStateToProps = state => ({
  orders: addPriceTotalOrders(state.order),
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Order);
