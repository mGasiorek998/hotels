import styled from 'styled-components';

export const StyledMain = styled.main`
  margin: 16px 8px;

  ${({ theme }) => theme.devices.tablet} {
    margin: 64px 16px 16px;
  }

  ${({ theme }) => theme.devices.desktop} {
    margin: 64px 32px 32px;
  }
`;
