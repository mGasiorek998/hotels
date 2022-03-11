import { StyledButton } from './CounterButton.styles';

interface CounterButtonProps {
  children: string;
  handleClick: () => void;
  disabled?: boolean;
}

const CounterButton = ({
  children,
  disabled,
  handleClick,
}: CounterButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default CounterButton;
