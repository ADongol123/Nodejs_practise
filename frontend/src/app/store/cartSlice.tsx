import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")!) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
      state.cartTotalAmount += action.payload.price
      console.log(action.payload, "action")
      toast.success(`${action.payload.name}added a new product to cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem: any) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item: any) => item?.id
              !== cartItem.id);
          state.cartItems = nextCartItems;

          toast.error(`Product ${action.payload.name} has been removed from cart`, {
            position: "bottom-left"
          })
        }
      })
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;

          toast.info("Decreased product quantity", {
            position: "bottom-left",
          });
        } else {
          state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);

          if (state.cartItems.length === 0) {
            state.cartItems = []; // Assign an empty array if no items are left
          }

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    }


  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      }
    }
  }
})



export const { addToCart, clearCart, removeFromCart, decreaseCart } = cartSlice.actions
export const selectProductOrder = (state: any) => state.items.Name;
export default cartSlice.reducer