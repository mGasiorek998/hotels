import AriaDescription from 'components/atoms/AriaDescription/AriaDescription';
import CounterButton from 'components/atoms/CounterButton/CounterButton';
import { useDispatch, useSelector } from 'react-redux';
import { FiltersEnum } from 'redux/slices/filters/filters.types';
import { applyFilter } from 'redux/slices/filters/filtersSlice';
import { State } from 'types';
import { StyledHeader, Wrapprer, StyledCounter } from './CounterFilter.styles';

interface CounterProps {
  label: string;
  filter: FiltersEnum;
}

const CounterFilter = ({ label, filter }: CounterProps) => {
  const dispatch = useDispatch();
  const value = useSelector((state: State) => state.filters[filter]);

  return (
    <Wrapprer>
      <StyledHeader>{label}:</StyledHeader>
      <CounterButton
        handleClick={() => dispatch(applyFilter({ filter, value: value + 1 }))}
      >
        <>
          <AriaDescription>
            Add button {label} occupancy filter. Find rooms with ocuppancy:{' '}
            {value} {label} and more.
          </AriaDescription>
          <span aria-hidden="true">+</span>
        </>
      </CounterButton>
      <StyledCounter data-testid="counter">{value}</StyledCounter>
      <CounterButton
        disabled={value <= 0}
        handleClick={() => dispatch(applyFilter({ filter, value: value - 1 }))}
      >
        <>
          <AriaDescription>
            Less button {label} occupancy filter. Find rooms with ocuppancy:{' '}
            {value} {label} and more.
          </AriaDescription>
          <span aria-hidden="true">-</span>
        </>
      </CounterButton>
    </Wrapprer>
  );
};

export default CounterFilter;
