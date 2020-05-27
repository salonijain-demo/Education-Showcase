import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin-top: 0.5em;
  width: ${props=> props.width};
  color: ${props => props.inputColor || "black"};
  background: light-gray;
  border: 1px solid hsl(0,0%,80%);
  border-radius: 3px;
`;

export default Input;