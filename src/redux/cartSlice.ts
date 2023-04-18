import { createSlice } from "@reduxjs/toolkit";

interface itemInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
}
export interface cartInterface {
  cart: itemInterface[];
}

const initialState = {
  cart: [],
} as cartInterface;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: { payload: itemInterface }) => {
      const { id, name, price, image, quantity, color, size } = action.payload;
      const isAlreadyEx = state.cart.map((i) => i.id).includes(id);
      if (!isAlreadyEx) {
        state.cart = [
          ...state.cart,
          { id, name, price, image, quantity, color, size },
        ];
      }
    },
    removeFromCart: (state, action: { payload: { id: string } }) => {
      const { id } = action.payload;
      let oldState = state.cart;
      let newState = oldState.filter((i) => i.id !== id);
      state.cart = newState;
    },
    increaseItemQuantity: (state, action: { payload: { id: string } }) => {
      const { id } = action.payload;
      console.log("cartSlice");

      let target = state.cart.find((i) => i.id === id);
      target.quantity = target.quantity + 1;
    },
    decrementItemQuantity: (state, action: { payload: { id: string } }) => {
      const { id } = action.payload;
      let target = state.cart.find((i) => i.id === id);
      if (target.quantity === 1) {
        return;
      }
      if (target.quantity > 1) {
        target.quantity--;
      }
    },
    changeQuantity: (
      state,
      action: { payload: { id: string; quantity: number } }
    ) => {
      const { id } = action.payload;
      let target = state.cart.find((i) => i.id === id);
      target.quantity = action.payload.quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decrementItemQuantity,
  changeQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
