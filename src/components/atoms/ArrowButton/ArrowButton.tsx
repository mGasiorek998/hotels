import { StyledArrowButton } from './ArrowButton.styles';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import AriaDescription from '../AriaDescription/AriaDescription';

interface ArrowButtonProps {
  dir: string;
  handleClick: () => void;
}
const ArrowButton = ({ dir, handleClick }: ArrowButtonProps) => {
  return (
    <StyledArrowButton dir={dir} onClick={handleClick}>
      {dir === 'forward' ? (
        <>
          <MdArrowForwardIos aria-hidden="true" />
          <AriaDescription>
            Hotel Images slider. Move to next slide.
          </AriaDescription>
        </>
      ) : (
        <>
          <MdArrowBackIos aria-hidden="true" />
          <AriaDescription>
            Hotel Images slider. Move to previous slide.
          </AriaDescription>
        </>
      )}
    </StyledArrowButton>
  );
};

export default ArrowButton;
