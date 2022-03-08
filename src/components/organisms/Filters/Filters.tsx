import CounterFilter from 'components/molecules/CounterFilter/CounterFilter';
import StarRatingFilter from 'components/molecules/StarRatingFilter/StarRatingFilter';
import { FiltersEnum } from 'redux/slices/filters/filters.types';
import { FiltersSection } from './Filters.styles';
import { useSelector } from 'react-redux';
import { State } from 'types';

const Filters = () => {
  const {
    filters: { kids, adults },
    menu: { isOpen },
  } = useSelector((state: State) => state);

  return (
    <FiltersSection isOpen={isOpen}>
      <StarRatingFilter />
      <CounterFilter
        label="Adults"
        filter={FiltersEnum.Adults}
        counter={adults}
      />
      <CounterFilter
        label="Children"
        filter={FiltersEnum.Kids}
        counter={kids}
      />
    </FiltersSection>
  );
};

export default Filters;
