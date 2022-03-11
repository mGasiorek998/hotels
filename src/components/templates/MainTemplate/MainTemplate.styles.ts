import styled from 'styled-components';

export const StyledMain = styled.main`
  margin: 16px 8px;

  ${({ theme }) => theme.devices.tablet} {
    margin: 64px auto 16px;
    width: 90%;
  }

  ${({ theme }) => theme.devices.desktop} {
    margin: 64px auto 32px;
    width: 70%;
    min-width: 850px;
  }
`;
