import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from 'redux/slices/menu/menuSlice';
import { Burger, BurgerLines } from './BurgerButton.styles';

const BurgerButton = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: State) => state.menu);

  return (
    <Burger onClick={() => dispatch(toggleMenu())}>
      <BurgerLines isOpen={isOpen} />
    </Burger>
  );
};

export default BurgerButton;
