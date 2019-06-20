import styled from 'styled-components';

import Fundo from '~/assets/fundo.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  background-image: url(${Fundo});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 35%, rgba(255, 255, 255, 0) 100%);
  }
`;

export const LogoContainer = styled.img`
  width: 72px;
  height: 72px;
  margin-bottom: 15px;
  z-index: 1;
`;

export const SignForm = styled.form`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  input {
    padding: 15px 20px;
    border: 0;
    border-radius: 8px;
    font-size: 15px;
    color: #999;
    letter-spacing: 0;
    margin-bottom: 10px;
  }
  button {
    padding: 15px 0;
    background: #ff2d37;
    border: 0;
    border-radius: 8px;
    margin-top: 5px;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
  }
`;
