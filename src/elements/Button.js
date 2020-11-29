import styled, { css } from 'styled-components';

export default styled.button`
  background: #ff4d4d;
  border-radius: 15px;
  border: 2.5px solid #ff4d4d;
  color: white;
  width: 150px;
  margin: 5px 5px;
  padding: 7px 13px;
  &:hover{
    color: black;
    border-color: #ff4d4d;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  ${props => props.primary && css`
    font-family: 'Poppins', sans-serif;  
    background: black;
    color: #ff4d4d;
    &:hover{
      color: white;
      border-color: black;
      font-weight: 500;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
    }
  `}
`;