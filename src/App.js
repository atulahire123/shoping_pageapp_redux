import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import Notification from './components/Layout/Notification';
import { fetchCartData, sendCartData } from './components/store/CartSlice/cart-actions';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  
  const [isInitial, setIsInitial] = useState(true); // Define isInitial flag with useState

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch, isInitial]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
