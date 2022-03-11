import styled from 'styled-components';

export const RoomItemWrapper = styled.li`
  display: grid;
  list-style: none;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: 300px 1fr;
  }

  ${({ theme }) => theme.devices.desktop} {
    grid-template-columns: 380px 1fr;
  }
`;

export const RoomHeader = styled.div`
  margin: 0 16px 16px 0;

  > h3 {
    margin-bottom: 8px;
  }
`;
