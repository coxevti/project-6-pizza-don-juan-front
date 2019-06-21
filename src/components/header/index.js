import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthActions from '~/store/ducks/auth';

import {
  MainHeader, HeaderContent, MainLogo, MainUser,
} from './styles';

import logo from '~/assets/logo.svg';

function Header({ user, logout }) {
  return (
    <MainHeader>
      <HeaderContent>
        <MainLogo>
          <img src={logo} alt="logo" />
          <h1>Pizzaria Don Juan</h1>
        </MainLogo>
        <MainUser>
          <h1>{user.fullname}</h1>
          <button type="button" onClick={logout}>Sair do app</button>
        </MainUser>
      </HeaderContent>
    </MainHeader>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    fullname: PropTypes.string,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
