import Star, { StarType } from 'components/atoms/Star/Star';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Hotel } from 'redux/slices/api/api.types';
import { getRoomsByHotelId } from 'redux/slices/api/apiSlice';
import RoomsList from '../RoomsList/RoomsList';
import {
  HotelCardWrapper,
  HotelHeader,
  HotelImage,
  HotelDetails,
  HotelStarsRating,
} from './HotelCard.styles';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({
  hotel: { id, name, address1, address2, starRating, images, roomsDetails },
}: HotelCardProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomsByHotelId(id));
  }, [dispatch, id]);

  return (
    <HotelCardWrapper>
      <HotelHeader>
        <HotelImage src={images[0].url} alt="hotel 1" />
        <HotelDetails>
          <h1>{name}</h1>
          <h3>{address1}</h3>
          <h3>{address2}</h3>
        </HotelDetails>
        <HotelStarsRating>
          {[1, 2, 3, 4, 5].map((value) => (
            <Star
              key={value}
              type={StarType.Noninteractive}
              isFilled={value <= +starRating}
              value={value}
            />
          ))}
        </HotelStarsRating>
      </HotelHeader>
      {roomsDetails?.rooms ? (
        <RoomsList
          rooms={roomsDetails?.rooms}
          ratePlans={roomsDetails?.ratePlans}
        />
      ) : (
        <p>Loading rooms...</p>
      )}
    </HotelCardWrapper>
  );
};

export default HotelCard;
