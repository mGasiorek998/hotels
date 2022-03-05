import {
  FiltersSection,
  Overlay,
  StyledHeader,
  StyledImage,
} from './Header.styles';
import HeaderImage from '../../../assets/images/HeaderImage.webp';
import StarRatingFilter from 'components/molecules/StarRatingFilter/StarRatingFilter';

const Header = () => (
  <StyledHeader>
    <Overlay>
      <StyledImage src={HeaderImage} alt="Header image" />
    </Overlay>
    <FiltersSection>
      <StarRatingFilter />
    </FiltersSection>
  </StyledHeader>
);

export default Header;
