import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'redux/slices/menu/menuSlice';
import { State } from 'types';
import AriaDescription from '../AriaDescription/AriaDescription';
import { Burger, BurgerLines } from './BurgerButton.styles';

const BurgerButton = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: State) => state.menu);

  return (
    <Burger isOpen={isOpen} onClick={() => dispatch(toggleMenu())}>
      <BurgerLines isOpen={isOpen} aria-hidden="true" />
      <AriaDescription>
        Menu {!isOpen ? 'open' : 'close'} button
      </AriaDescription>
    </Burger>
  );
};

export default BurgerButton;
