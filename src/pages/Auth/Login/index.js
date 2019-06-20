import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthActions from '~/store/ducks/auth';

import { Container, LogoContainer, SignForm } from './styles';

import Logo from '~/assets/logo.svg';

class SignIn extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <LogoContainer src={Logo} alt="logo" />
        <SignForm onSubmit={this.handleLoginSubmit}>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Seu e-mail"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha secreta"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Entrar</button>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
