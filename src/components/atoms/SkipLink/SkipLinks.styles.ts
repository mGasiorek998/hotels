import styled from 'styled-components';

interface StyledSkipLinkProps {
  isFocused: boolean;
}

export const StyledSkipLink = styled.a<StyledSkipLinkProps>`
  position: absolute;
  right: 20px;
  z-index: 5;
  transform: translateY(${({ isFocused }) => (isFocused ? '0' : '-100%')});
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  color: black;
`;
