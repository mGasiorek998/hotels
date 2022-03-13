import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RoomItem from 'components/molecules/RoomItem/RoomItem';
import { Room } from 'redux/slices/api/api.types';
import { State } from 'types';
import { StyledText } from './RoomsList.styles';

interface RoomsListProps {
  rooms: Room[];
}

const RoomsList = ({ rooms = [] }: RoomsListProps) => {
  const { adults, kids } = useSelector((state: State) => state.filters);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);

  // filter by rooms occupancy
  useEffect(() => {
    let filteredRooms = rooms;
    if (kids === 0) {
      filteredRooms = filteredRooms.filter(
        ({ occupancy }) => occupancy.maxChildren === 0
      );
    } else {
      filteredRooms = filteredRooms.filter(
        ({ occupancy }) => occupancy.maxChildren >= kids
      );
    }
    // when there is no adults skip filtering
    if (adults > 0) {
      filteredRooms = filteredRooms.filter(
        ({ occupancy }) => occupancy.maxAdults >= adults
      );
    }

    setFilteredRooms(filteredRooms);
  }, [adults, kids, rooms]);

  return (
    <>
      {filteredRooms.length ? (
        <ul>
          {filteredRooms.map((room: Room, i: number) => (
            <RoomItem key={i} room={room} />
          ))}
        </ul>
      ) : (
        <StyledText>No rooms matched your needs :(</StyledText>
      )}
    </>
  );
};

export default RoomsList;
