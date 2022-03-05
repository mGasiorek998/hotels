import {
  FiltersSection,
  Overlay,
  StyledHeader,
  StyledImage,
} from './Header.styles';
import HeaderImage from '../../../assets/images/HeaderImage.webp';
import StarRatingFilter from 'components/molecules/StarRatingFilter/StarRatingFilter';
import CounterFilter from 'components/molecules/CounterFilter/CounterFilter';
import { FiltersEnum } from 'redux/slices/filters.types';
import { useSelector } from 'react-redux';

const Header = () => {
  const { kids, adults } = useSelector((state: State) => state.filters);

  return (
    <StyledHeader>
      <Overlay>
        <StyledImage src={HeaderImage} alt="Header image" />
      </Overlay>
      <FiltersSection>
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
    </StyledHeader>
  );
};

export default Header;
