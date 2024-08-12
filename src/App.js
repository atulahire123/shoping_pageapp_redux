import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/Layout/Notification';

function App() {
  const [notification, setNotification] = useState(null);  // Add this line
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      setNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' });

      try {
        const response = await fetch('https://shoping-20fb4-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart),
        });

        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }

        setNotification({ status: 'success', title: 'Success!', message: 'Sent cart data successfully!' });
      } catch (error) {
        setNotification({ status: 'error', title: 'Error!', message: 'Sending cart data failed!' });
      }
    };

    sendCartData();
  }, [cart]);

  return (
    <Layout>
      {notification && <Notification {...notification} />}  {/* Add this line */}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
