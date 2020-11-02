import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline-width: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Roboto', 'Segoe UI', sans-serif;
    background: #f1f1f1;
  }

  ol, ul {
    list-style: none;
  }

  input, textarea {
    &::placeholder {
      font-size: 1rem;
    }
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }

  svg {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`;
