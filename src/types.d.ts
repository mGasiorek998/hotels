import { ApiState } from 'redux/slices/api/api.types';
import { MenuState } from 'redux/slices/menu/menu.types';
import { FiltersState } from 'redux/slices/filters/filters.types';
// Application global state
export interface State {
  filters: FiltersState;
  menu: MenuState;
  hotels: ApiState;
}
