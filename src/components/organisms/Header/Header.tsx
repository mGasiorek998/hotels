import {
  BurgerWrapper,
  Overlay,
  StyledHeader,
  StyledImage,
} from './Header.styles';
import HeaderImage from '../../../assets/images/HeaderImage.webp';
import Filters from '../Filters/Filters';
import BurgerButton from 'components/atoms/BurgerButton/BurgerButton';

const Header = () => {
  return (
    <StyledHeader>
      <BurgerWrapper>
        <BurgerButton />
      </BurgerWrapper>
      <Overlay>
        <StyledImage src={HeaderImage} alt="Header image" />
      </Overlay>
      <Filters />
    </StyledHeader>
  );
};

export default Header;
