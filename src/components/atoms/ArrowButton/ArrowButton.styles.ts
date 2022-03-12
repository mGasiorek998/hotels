import { rgba } from 'polished';
import styled from 'styled-components';

interface ArrowButtonProps {
  dir: string;
}
export const StyledArrowButton = styled.button<ArrowButtonProps>`
  position: absolute;
  top: 0;
  right: ${({ dir }) => (dir === 'forward' ? '0' : 'auto')};
  left: ${({ dir }) => (dir === 'back' ? '0' : 'auto')};
  bottom: 0;
  z-index: 2;
  padding: ${({ theme }) => theme.spacing.m};
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: white;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      to ${({ dir }) => (dir === 'forward' ? 'right' : 'left')},
      transparent,
      ${({ theme }) => rgba(theme.colors.black, 0.1)}
    );
    transition: background-image 0.3s ease-in-out;
  }
`;
