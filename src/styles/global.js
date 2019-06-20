import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
    color: #333;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body, html, #root{
    height: 100%;
  }
  input, button{
    font-family: 'Roboto', sans-serif;
  }
  button{
    cursor: pointer;
  }
`;
