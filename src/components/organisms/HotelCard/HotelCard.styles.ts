import styled from 'styled-components';

export const HotelCardWrapper = styled.li`
  list-style: none;
  margin-bottom: 32px;
  box-shadow: 0px 10px 16px 0px ${({ theme }) => theme.colors.lightGrey};

  > * {
    padding: 16px 8px;

    ${({ theme }) => theme.devices.desktop} {
      padding: 32px;
    }
  }
`;

export const HotelHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.devices.desktop} {
    flex-direction: row;
  }
`;

export const HotelDetails = styled.div`
  margin-right: auto;

  h1 {
    margin-top: 16px;

    ${({ theme }) => theme.devices.desktop} {
      margin-top: 0;
    }
  }
  h1,
  h3 {
    margin-bottom: 16px;
  }
`;

export const HotelStarsRating = styled.div`
  display: flex;
`;
