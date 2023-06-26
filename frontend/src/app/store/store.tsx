import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
// import counterReducer from "../features/counter/counterSlice";
// import userSlice from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    // user: userSlice,
    cart: cartReducer,
  },
});
