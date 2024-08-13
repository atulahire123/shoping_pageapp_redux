// cart-actions.js

import { uiActions } from '../ui-slice';       // Import uiActions
import { cartActions } from './cart-slice';    // Import cartActions


export const fetchCartData =() =>{
    return async(dispatch) => {
        const fetchData = async () =>{
            const response=await fetch('https://shoping-20fb4-default-rtdb.firebaseio.com/cart.json'

            );
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
              }
        
              const data = await response.json();
              return data;
            };
            try{
                const cartData =await fetchData();
                dispatch(cartActions.replaceCart(cartData));
            }
            catch (error)
            {
                dispatch(
                    uiActions.showNotification({
                      status: 'error',
                      title: 'Error!',
                      message: 'Fetching cart data failed!',
                    })
                  );
                }
              };
}
        
// Action creator for sending cart data to the server
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      // Using PUT to update the entire cart on the server
      const response = await fetch(
        'https://shoping-20fb4-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

     if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

// Action creator for fetching cart data from the server
