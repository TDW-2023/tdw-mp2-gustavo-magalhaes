import { createGlobalStyle, css } from 'styled-components';

const fontUrl = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap';

const GlobalStyle = createGlobalStyle`
  ${() => css`
    @import url('${fontUrl}');

    body {
      font-family: 'Lato', sans-serif;
      margin: 0;
    }
  `}
`;

export default GlobalStyle;