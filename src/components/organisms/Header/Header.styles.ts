import styled from 'styled-components';
import { rgba } from 'polished';

export const StyledHeader = styled.header`
  position: relative;
  height: 500px;
`;

export const StyledImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  z-index: -1;

  ${({ theme }) => theme.devices.desktop} {
    object-position: 100% 65%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => rgba(theme.colors.black, 0.4)}
  );
`;

export const BurgerWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
`;
