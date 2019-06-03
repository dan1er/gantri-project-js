import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    /* defines 1rem = 10px value */
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.white};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text} ;
  }
  
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`
