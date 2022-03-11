import Header from 'components/organisms/Header/Header';
import HotelList from 'components/organisms/HotelList/HotelList';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from 'redux/slices/api/apiSlice';
import { State } from 'types';

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
          <h3>Loading Hotels..</h3>
        )}
      </MainTemplate>
    </>
  );
};

export default App;
