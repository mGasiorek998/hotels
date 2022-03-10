import Header from 'components/organisms/Header/Header';
import HotelList from 'components/organisms/HotelList/HotelList';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHotels } from 'redux/slices/api/apiSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainTemplate>
        <HotelList />
      </MainTemplate>
    </>
  );
};

export default App;
