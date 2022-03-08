import { StyledMain } from './MainTemplate.styles';

interface MainTemplateProps {
  children: JSX.Element;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return <StyledMain>{children}</StyledMain>;
};

export default MainTemplate;
