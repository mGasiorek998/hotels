import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import AriaDescription from '../AriaDescription/AriaDescription';
import { StarButton, StarWrapper } from './Star.styles';

export enum StarType {
  Interactive,
  Noninteractive,
}
interface StarProps {
  type: StarType;
  isFilled: boolean;
  value: number;
  handleClick?: (v: number) => void;
  handleMouseEnter?: (v: number) => void;
  handleMouseLeave?: () => void;
}

const Star = ({
  type,
  isFilled,
  value,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}: StarProps) =>
  type === StarType.Interactive ? (
    <StarButton
      isFilled={isFilled}
      onClick={() => handleClick?.(value)}
      onMouseEnter={() => handleMouseEnter?.(value)}
      onMouseLeave={() => handleMouseLeave?.()}
    >
      {isFilled ? (
        <AiFillStar data-testid="starFilled" aria-hidden="true" />
      ) : (
        <AiOutlineStar data-testid="starOutlined" aria-hidden="true" />
      )}
      <AriaDescription>
        Star rating Filter. Filter By {value} {value !== 5 && 'and more '}
        stars hotel
      </AriaDescription>
    </StarButton>
  ) : (
    <StarWrapper isFilled={isFilled}>
      {isFilled ? (
        <AiFillStar aria-hidden="true" />
      ) : (
        <AiOutlineStar aria-hidden="true" />
      )}
    </StarWrapper>
  );

export default Star;
