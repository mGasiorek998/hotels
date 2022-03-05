import styled from 'styled-components';

interface StarStyleProp {
  isFilled: boolean;
}

export const StarButton = styled.button<StarStyleProp>`
  color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.orange : theme.colors.black};
  border: none;
  background-color: transparent;

  > svg {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
