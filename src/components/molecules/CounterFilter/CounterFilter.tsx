import CounterButton from 'components/atoms/CounterButton/CounterButton';
import { useDispatch } from 'react-redux';
import { FiltersEnum } from 'redux/slices/filters/filters.types';
import { applyFilter } from 'redux/slices/filters/filtersSlice';
import { StyledHeader, Wrapprer, StyledCounter } from './CounterFilter.styles';

interface CounterProps {
  label: string;
  filter: FiltersEnum;
  counter: number;
}

const CounterFilter = ({ label, filter, counter }: CounterProps) => {
  const dispatch = useDispatch();

  return (
    <Wrapprer>
      <StyledHeader>{label}:</StyledHeader>
      <CounterButton
        handleClick={() =>
          dispatch(applyFilter({ filter, value: counter + 1 }))
        }
      >
        +
      </CounterButton>
      <StyledCounter>{counter}</StyledCounter>
      <CounterButton
        disabled={counter <= 0}
        handleClick={() =>
          dispatch(applyFilter({ filter, value: counter - 1 }))
        }
      >
        -
      </CounterButton>
    </Wrapprer>
  );
};

export default CounterFilter;
