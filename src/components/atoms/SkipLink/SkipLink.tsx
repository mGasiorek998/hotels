import { useState } from 'react';
import { StyledSkipLink } from './SkipLinks.styles';

interface SkipLinkProps {
  to: string;
  children: string;
}

const SkipLink = ({ to, children }: SkipLinkProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledSkipLink
      href={to}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {children}
    </StyledSkipLink>
  );
};

export default SkipLink;
