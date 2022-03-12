import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface LoadingSpinnerProps {
  size: string;
}
const LoadingSpinner = styled.div<LoadingSpinnerProps>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: ${({ size }) => {
    switch (size) {
      case 'large':
        return '50px';
      case 'small':
        return '25px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'large':
        return '50px';
      case 'small':
        return '25px';
    }
  }};
  border-radius: 50%;
`;

export default LoadingSpinner;
