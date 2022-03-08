import styled from 'styled-components';

interface StarStyleProp {
  isFilled: boolean;
}

export const StarButton = styled.button<StarStyleProp>`
  color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.orange : theme.colors.black};
  border: none;
  background-color: transparent;
  cursor: pointer;

  > svg {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const StarWrapper = styled.div<StarStyleProp>`
  color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.orange : theme.colors.black};

  > svg {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
