import LoadingSpinner from 'components/atoms/LoadingSpinner/LoadingSpinner';
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
