import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice/cart-slice';
import uiReducer from './ui-slice';
import cartSliceReducer from './CartSlice/cart-slice';

const store = configureStore({
    reducer:{
        cart:cartReducer,
        ui:uiReducer,
        cart:cartSliceReducer,
    }
});

export default store;