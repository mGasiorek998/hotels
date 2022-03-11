import { Room } from 'redux/slices/api/api.types';
import { RoomDetails, RoomHeader, RoomItemWrapper } from './RoomItem.styles';

interface RoomItemProps {
  room: Room;
}

const RoomItem = ({ room }: RoomItemProps) => {
  return (
    <RoomItemWrapper>
      <RoomHeader>
        <h3>{room.name}</h3>
        <p>Adults: {room.occupancy.maxAdults}</p>
        <p>Children: {room.occupancy.maxChildren}</p>
      </RoomHeader>
      <RoomDetails>
        <p>{room.longDescription}</p>
      </RoomDetails>
    </RoomItemWrapper>
  );
};

export default RoomItem;
