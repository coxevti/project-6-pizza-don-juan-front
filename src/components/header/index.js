import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  MainHeader, HeaderContent, MainLogo, MainUser,
} from './styles';

import logo from '~/assets/logo.svg';

class Header extends Component {
  static propTypes = {
    user: PropTypes.shape({
      fullname: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {}

  render() {
    const { user } = this.props;
    return (
      <MainHeader>
        <HeaderContent>
          <MainLogo>
            <img src={logo} alt="logo" />
            <h1>Pizzaria Don Juan</h1>
          </MainLogo>
          <MainUser>
            <h1>{user.fullname}</h1>
            <Link to="/logout">Sair do app</Link>
          </MainUser>
        </HeaderContent>
      </MainHeader>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Header);
