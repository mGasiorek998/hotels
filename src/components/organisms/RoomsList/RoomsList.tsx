import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RoomItem from 'components/molecules/RoomItem/RoomItem';
import { RatePlan, Room } from 'redux/slices/api/api.types';
import { State } from 'types';

interface RoomsListProps {
  rooms: Room[];
  ratePlans: RatePlan[];
}

const RoomsList = ({ rooms = [], ratePlans = [] }: RoomsListProps) => {
  const { adults, kids } = useSelector((state: State) => state.filters);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);

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
            <RoomItem key={i} room={room} ratePlans={ratePlans} />
          ))}
        </ul>
      ) : (
        <p>No rooms matched your needs :(</p>
      )}
    </>
  );
};

export default RoomsList;
