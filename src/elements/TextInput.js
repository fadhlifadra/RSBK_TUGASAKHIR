import styled, { css } from 'styled-components';

export default styled.input`
  background: transparent;
  border-radius: 15px;
  border: 2.5px solid grey;
  color: black;
  margin: 5px 5px;
  padding: 7px 10px;
  width: 250px;
  ${(props) => props.border && css`
      border-color: #ff4d4d;
  `}
`;