import styled, { css } from 'styled-components';

export default styled.input`
  background: transparent;
  border-radius: 20px;
  border: 2.5px solid white;
  color: white;
  margin: 5px 5px;
  padding: 7px 13px;
  width:90px;
  &:hover{
    color: lightgrey;
    border-color: lightgrey;
  }
  ${props => props.primary && css`
    background: white;
    color: #001529;
    &:hover{
      color: #001529;
      border-color: white;
      font-weight: 500;
    }
  `}
`;