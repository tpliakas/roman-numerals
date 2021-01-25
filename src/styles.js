import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 3em;
  font-weight: 600;
  text-align: center;
  padding: 0.5em;
  margin-bottom: 1em;
  color: #333;
  background-color: white;
  box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f5f5;
    text-align: center;
  };
  .contentWrapper {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
  };
  .toRoman, .fromRoman {
    width: fit-content;
    margin: 3em auto;
    padding: 2em;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
  };
  .subTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    margin-bottom: 1.5em;
  };
  .arrow {
    margin: 0 1em
  };
  .notValid {
    color: red;
    font-weight: normal;
    font-size: .7em;
  };
  .clear {
    margin-top: 1.5em
  };
  .red {
    color: darkred;
  }
`

export { GlobalStyle, Title }
