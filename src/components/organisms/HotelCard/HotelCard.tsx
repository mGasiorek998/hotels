import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoadingSpinner from 'components/atoms/LoadingSpinner/LoadingSpinner';
import Carousel from 'components/molecules/Carousel/Carousel';
import { Hotel } from 'redux/slices/api/api.types';
import { getRoomsByHotelId } from 'redux/slices/api/apiSlice';
import RoomsList from '../RoomsList/RoomsList';
import {
  HotelCardWrapper,
  HotelHeader,
  HotelDetails,
} from './HotelCard.styles';
import StarRatingFilter from 'components/molecules/StarRatingFilter/StarRatingFilter';
import AriaDescription from 'components/atoms/AriaDescription/AriaDescription';

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
        <Carousel images={images} />
        <HotelDetails>
          <h1>{name}</h1>
          <h3>{address1}</h3>
          <h3>{address2}</h3>
        </HotelDetails>
        <AriaDescription id="starsRating">
          {starRating} stars out of 5
        </AriaDescription>
        <StarRatingFilter
          aria-labelledby="starsRating"
          isInteractive={false}
          starsValue={+starRating}
        />
      </HotelHeader>
      {roomsDetails?.rooms ? (
        <RoomsList rooms={roomsDetails?.rooms} />
      ) : (
        <LoadingSpinner size="small" />
      )}
    </HotelCardWrapper>
  );
};

export default HotelCard;
