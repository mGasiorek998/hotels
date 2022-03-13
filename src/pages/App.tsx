import LoadingSpinner from 'components/atoms/LoadingSpinner/LoadingSpinner';
import SkipLink from 'components/atoms/SkipLink/SkipLink';
import Header from 'components/organisms/Header/Header';
import HotelList from 'components/organisms/HotelList/HotelList';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from 'redux/slices/api/apiSlice';
import { State } from 'types';
import { StyledLoadingSpinner } from './App.styles';

const App = () => {
  const dispatch = useDispatch();
  const { hotelsLoading, hotelsList } = useSelector(
    (state: State) => state.hotels
  );
  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);
  return (
    <>
      <SkipLink to="#hotels">Skip to hotels list</SkipLink>
      <Header />
      <MainTemplate>
        {!hotelsLoading && hotelsList ? (
          <HotelList />
        ) : (
          <StyledLoadingSpinner>
            <LoadingSpinner size="large" />
          </StyledLoadingSpinner>
        )}
      </MainTemplate>
    </>
  );
};

export default App;
