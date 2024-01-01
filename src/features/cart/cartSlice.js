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

      // Delete the item from the cart if the quantity is 0
      if (selectedPizza.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
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

export const getUsername = (state) => state.user.username;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
