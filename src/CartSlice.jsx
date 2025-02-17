import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item is already in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      // If it is, increase the quantity by 1
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // If it's not, add the item to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
    
    },
    removeItem: (state, action) => {
      // Find the index of the item to be removed
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // Remove the item
      state.items.splice(index, 1);
    },
    updateQuantity: (state, action) => {
      // Find the item to update
      const item = state.items.find((item) => item.id === action.payload.id);
      // Update the quantity
      item.quantity = action.payload.quantity;

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
