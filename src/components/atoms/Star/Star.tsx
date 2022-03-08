import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
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
        <AiFillStar data-testid="starFilled" />
      ) : (
        <AiOutlineStar data-testid="starOutlined" />
      )}
    </StarButton>
  ) : (
    <StarWrapper isFilled={isFilled}>
      {isFilled ? <AiFillStar /> : <AiOutlineStar />}
    </StarWrapper>
  );

export default Star;
