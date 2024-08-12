import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../store/CartSlice/cart-slice';
import { uiActions } from '../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuant = useSelector(state => state.cart.totalQuantity);

  const toggleHandler = () => {
    // Assuming only one toggle is needed
    dispatch(uiActions.toggleCartVisible());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuant}</span>
    </button>
  );
};

export default CartButton;
