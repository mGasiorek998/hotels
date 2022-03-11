import styled from 'styled-components';

interface ArrowButtonProps {
  dir: string;
}
export const StyledArrowButton = styled.button<ArrowButtonProps>`
  position: absolute;
  top: 0;
  right: ${({ dir }) => (dir === 'forward' ? '0' : 'auto')};
  left: ${({ dir }) => (dir === 'backward' ? '0' : 'auto')};
  bottom: 0;
  z-index: 2;
  padding: 16px;
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: white;
`;
