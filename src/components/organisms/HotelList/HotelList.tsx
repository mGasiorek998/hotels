import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HotelCard from 'components/organisms/HotelCard/HotelCard';
import { Hotel } from 'redux/slices/api/api.types';
import { State } from 'types';

const HotelList = () => {
  const {
    hotels: { hotelsList },
    filters: { stars },
  } = useSelector((state: State) => state);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const filteredHotels =
      stars > 0
        ? hotelsList.filter(({ starRating }: Hotel) => +starRating >= stars)
        : hotelsList;
    setFilteredHotels(filteredHotels);
  }, [stars, hotelsList]);

  return (
    <section>
      <ul>
        {filteredHotels.length > 0 &&
          filteredHotels.map((hotel: Hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
      </ul>
    </section>
  );
};

export default HotelList;
