import { Overlay, StyledHeader, StyledImage } from './Header.styles';
import HeaderImage from '../../../assets/images/HeaderImage.webp';

const Header = () => (
  <StyledHeader>
    <Overlay>
      <StyledImage src={HeaderImage} alt="Header image" />
    </Overlay>
  </StyledHeader>
);

export default Header;
