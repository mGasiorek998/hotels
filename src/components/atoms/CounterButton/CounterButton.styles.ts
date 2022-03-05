import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.m};
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
