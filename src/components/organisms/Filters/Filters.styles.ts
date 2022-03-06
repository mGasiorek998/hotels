import { rgba } from 'polished';
import styled from 'styled-components';

interface FilterSectionProps {
  isOpen: boolean;
}

export const FiltersSection = styled.section<FilterSectionProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 10px 1px ${({ theme }) => rgba(theme.colors.black, 0.4)};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: translateX(${({ isOpen }) => (!isOpen ? '-105%' : '0')});
  transition: transform 0.4s ease-in-out;

  ${({ theme }) => theme.devices.tablet} {
    position: absolute;
    top: auto;
    left: 50%;
    bottom: -5%;
    transform: translate(-50%, 5%);
    width: 650px;
    padding: 0 16px;
    height: 50px;
    flex-direction: row;
    transition: none;
  }
`;
