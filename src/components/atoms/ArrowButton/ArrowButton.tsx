import { StyledArrowButton } from './ArrowButton.styles';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

interface ArrowButtonProps {
  dir: string;
  handleClick: () => void;
}
const ArrowButton = ({ dir, handleClick }: ArrowButtonProps) => {
  return (
    <StyledArrowButton dir={dir} onClick={handleClick}>
      {dir === 'forward' ? <MdArrowForwardIos /> : <MdArrowBackIos />}
    </StyledArrowButton>
  );
};

export default ArrowButton;
