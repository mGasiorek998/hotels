import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { StarButton } from './Star.styles';

interface StarProps {
  isFilled: boolean;
  value: number;
  handleClick: (v: number) => void;
  handleMouseEnter: (v: number) => void;
  handleMouseLeave: () => void;
}

const Star = ({
  isFilled,
  value,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}: StarProps) => (
  <StarButton
    isFilled={isFilled}
    onClick={() => handleClick(value)}
    onMouseEnter={() => handleMouseEnter(value)}
    onMouseLeave={() => handleMouseLeave()}
  >
    {isFilled ? <AiFillStar /> : <AiOutlineStar />}
  </StarButton>
);

export default Star;
