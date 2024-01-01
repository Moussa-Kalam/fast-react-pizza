import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload is the new pizza
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      // payload is the id of the pizza
      state.cart = state.cart.filter(
        ({ pizzaId }) => pizzaId !== action.payload,
      );
    },

    increaseItemQuantity(state, action) {
      // payload is the id of the pizza
      const selectedPizza = state.cart.find(
        ({ pizzaId }) => pizzaId === action.payload,
      );

      // Increment the quantity
      selectedPizza.quantity++;

      // Update the total price
      selectedPizza.totalPrice =
        selectedPizza.quantity * selectedPizza.unitPrice;
    },

    decreaseItemQuantity(state, action) {
      // payload is the id of the pizza
      const selectedPizza = state.cart.find(
        ({ pizzaId }) => pizzaId === action.payload,
      );

      // Decrement the quantity
      selectedPizza.quantity--;

      // Update the total price
      selectedPizza.totalPrice =
        selectedPizza.quantity * selectedPizza.unitPrice;
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
