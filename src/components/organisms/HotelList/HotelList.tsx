import HotelCard from 'components/organisms/HotelCard/HotelCard';
import { useSelector } from 'react-redux';
import { Hotel } from 'redux/slices/hotels/api.types';
import { State } from 'types';

const HotelList = () => {
  const { hotelsList, hotelsLoading } = useSelector(
    (state: State) => state.hotels
  );

  return (
    <section>
      <ul>
        {hotelsLoading && <h1>Loading Hotels...</h1>}
        {hotelsList.length > 0 &&
          hotelsList.map((hotel: Hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
      </ul>
    </section>
  );
};

export default HotelList;
