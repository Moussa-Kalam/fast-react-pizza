import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 10,
      name: "Italian",
      quantity: 4,
      unitPrice: 20,
      totalPrice: 80,
    },
  ],
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
