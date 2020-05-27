import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: ${props=>props.backgroundColor};
  font-size: 16px;
  border-radius: 3px;
  color: white;
  border: 2px solid ${props=>props.backgroundColor};
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: light-${props=>props.backgroundColor};
    color: white;
  }
`;

export default Button;