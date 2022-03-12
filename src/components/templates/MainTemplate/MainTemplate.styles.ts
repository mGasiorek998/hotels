import styled from 'styled-components';

export const StyledMain = styled.main`
  margin: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.s}`};

  ${({ theme }) => theme.devices.tablet} {
    margin: ${({ theme }) => `${theme.spacing.xl} auto ${theme.spacing.m}`};
    width: 80%;
  }

  ${({ theme }) => theme.devices.desktop} {
    margin: ${({ theme }) => `${theme.spacing.xl} auto ${theme.spacing.l}`};
    width: 70%;
    min-width: 850px;
  }
`;
