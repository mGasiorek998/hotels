import styled from 'styled-components';

export const Wrapprer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-right: 6px;
`;

export const StyledCounter = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
