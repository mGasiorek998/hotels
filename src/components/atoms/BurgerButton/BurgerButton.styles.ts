import styled from 'styled-components';

interface BurgerProps {
  isOpen: boolean;
}

export const Burger = styled.button<BurgerProps>`
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'relative')};
  border: none;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.s};
  background: ${({ theme }) => theme.colors.white};
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 10;

  ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`;

export const BurgerLines = styled.div<BurgerProps>`
  height: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    transition: transform 0.2s ease-in-out;
  }

  &::after {
    transform: translateY(${({ isOpen }) => (!isOpen ? '10px' : '0px')});
  }

  &::before {
    transform: translateY(${({ isOpen }) => (!isOpen ? '-10px' : '0px')});
  }
`;
