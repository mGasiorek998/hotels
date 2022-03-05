import styled from 'styled-components';

interface StarStyleProp {
  isFilled: boolean;
}

export const StarButton = styled.button<StarStyleProp>`
  color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.orange : theme.colors.black};
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
`;
