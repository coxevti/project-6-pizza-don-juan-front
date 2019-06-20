import React, { Component } from 'react';

import { Container, LogoContainer, SignForm } from './styles';

import Logo from '~/assets/logo.svg';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <LogoContainer src={Logo} alt="logo" />
        <SignForm>
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

export default SignIn;
