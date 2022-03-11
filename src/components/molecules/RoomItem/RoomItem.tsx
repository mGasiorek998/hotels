import { Room } from 'redux/slices/api/api.types';
import { RoomHeader, RoomItemWrapper } from './RoomItem.styles';

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
      <div>
        <p>{room.longDescription}</p>
      </div>
    </RoomItemWrapper>
  );
};

export default RoomItem;
