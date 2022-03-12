import styled from 'styled-components';

export const RoomItemWrapper = styled.li`
  display: grid;
  list-style: none;
  padding: ${({ theme }) => `${theme.spacing.m} 0`};

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:first-of-type {
    padding: ${({ theme }) => `0 0 ${theme.spacing.m}`};
  }

  ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: 300px 1fr;
  }

  ${({ theme }) => theme.devices.desktop} {
    grid-template-columns: 380px 1fr;
  }
`;

export const RoomHeader = styled.div`
  margin: ${({ theme }) => `0 ${theme.spacing.m} ${theme.spacing.m} 0`};

  > h3 {
    margin-bottom: ${({ theme }) => theme.spacing.s};
  }
`;
