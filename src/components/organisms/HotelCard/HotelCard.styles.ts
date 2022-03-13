import styled from 'styled-components';

export const HotelCardWrapper = styled.li`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.l};
  box-shadow: 0px 10px 16px 0px ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;

  > * {
    padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.s}`};

    ${({ theme }) => theme.devices.desktop} {
      padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.l}`};
    }
  }
`;

export const HotelHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  ${({ theme }) => theme.devices.desktop} {
    flex-direction: row;
  }
`;

export const HotelDetails = styled.div`
  margin-right: auto;

  h1 {
    margin-top: ${({ theme }) => theme.spacing.m};

    ${({ theme }) => theme.devices.desktop} {
      margin-top: 0;
    }
  }

  h1,
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
`;

export const StarRatingWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.m};

  ${({ theme }) => theme.devices.desktop} {
    margin-top: 0;
  }
`;
