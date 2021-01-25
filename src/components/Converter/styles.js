import styled from 'styled-components'

const BLACK = '#333';
const LIGHT_BLACK = '#666';
const LIGHT_RED = '#b31111';

const Title = styled.div`
  font-size: 3em;
  font-weight: 600;
  text-align: center;
  padding: 0.5em;
  margin-bottom: 1em;
  color: ${BLACK};
  background-color: white;
  box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
  @media (max-width: 480px) {
    font-size: 1.7em;
    width: 100%
  }
`;

const Input = styled.input.attrs(props => ({
  type: "text",
  size: "1em",
}))`
  color: ${BLACK};
  font-size: 1em;
  border: 2px solid ${LIGHT_BLACK};
  border-radius: 3px;
  margin: .5em;
  padding: .5em;
`;

const Button = styled.button`
  background-color: ${props => props.color || `${BLACK}`};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: .6em 1em;
  border-radius: 3px;
  transition: background-color .3s ease;
  border: 0;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.color ? `${LIGHT_RED}` : `${LIGHT_BLACK}`};
  };
  &:focus {
    outline: none;
  }`;

const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: ${BLACK};
  font-size: 2em;
  font-weight: 600;
  background-color: #ececec;
  margin-top: 1em;
  padding: .5em .3em;
`;

export { Button, Input, Title, Value }
