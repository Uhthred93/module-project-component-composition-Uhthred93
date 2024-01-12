import { createGlobalStyle } from "styled-components";

export const spaceTheme = {
    colors: {
        background: '#0D1117',
        text: '#C9D1D9',
        accent: '#58A6FF',
        header: '#FFFFFF',
        footer: '#4C566A'
    },
    font: 'Arial, sans-serif',
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font};
    margin: 0;
    padding: 0;
  }
  
`;