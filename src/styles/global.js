import { 
  createGlobalStyle,
} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body{
    background-color: ${({theme}) => theme.color.background};
    font-family: ${({theme}) => theme.fontFamily};
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items : center;
  }
`;