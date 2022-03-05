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

export const FiltersSection = styled.section`
  min-height: 50px;
  position: absolute;
  left: 50%;
  bottom: -5%;
  transform: translate(-50%, -5%);
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 10px 1px ${({ theme }) => rgba(theme.colors.black, 0.4)};
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
