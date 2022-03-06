import { HotelsState } from 'redux/slices/hotels/hotels.types';
import { MenuState } from 'redux/slices/menu/menu.types';
import { FiltersState } from 'redux/slices/filters/filters.types';

// Application global state
interface State {
  filters: FiltersState;
  menu: MenuState;
  hotels: HotelsState;
}
