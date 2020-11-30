import styled, { css } from 'styled-components';

export default styled.button`
    border-radius: 40px;
    border-color: grey;
    padding: 12px;
    margin: 10px;
    background-color: #f4f4f4;
  &:hover{
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  ${props => props.primary && css`
    &:hover{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }
  `}
`;