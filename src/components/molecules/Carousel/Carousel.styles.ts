import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;

  ${({ theme }) => theme.devices.desktop} {
    width: 350px;
    margin-right: ${({ theme }) => theme.spacing.l};
  }
`;

interface HotelImageProps {
  isVisible: boolean;
}
export const HotelImage = styled.img<HotelImageProps>`
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 300px;
  width: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? '100%' : '0')};
  transition: opacity 0.2s ease-in;

  ${({ theme }) => theme.devices.desktop} {
    margin-right: ${({ theme }) => theme.spacing.l};
    width: 350px;
  }
`;
