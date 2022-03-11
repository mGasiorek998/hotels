import styled from 'styled-components';

export const RoomItemWrapper = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const RoomHeader = styled.div`
  margin: 0 16px 16px 0;

  > h3 {
    margin-bottom: 8px;
  }
`;
export const RoomDetails = styled.div``;
