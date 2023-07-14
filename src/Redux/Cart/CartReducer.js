import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE } from "./CartTyps";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const id = action.payload.id;
      const index = state.findIndex((p) => p.id === id);
      const updatedItems = [...state];
      if (index < 0) {
        const product = action.payload;

        return [...state, { ...product, quantity: 1 }];
      } else {
        const updateItem = { ...updatedItems[index] };
        updateItem.quantity++;
        updatedItems[index] = updateItem;
        return  updatedItems;
      }
    }
    case INCREMENT: {
      const id = action.payload.id;
      const index = state.findIndex((p) => p.id === id);
      const updatedProducts = [...state];
      updatedProducts[index].quantity++;
      return updatedProducts
    }
    case DECREMENT: {
      const id = action.payload.id;
      const index = state.findIndex((p) => p.id === id);
      const updatedProducts = [...state];
      if (action.payload.quantity > 1) {
        updatedProducts[index].quantity--;
        return  updatedProducts;
      } else {
        const updatedItems = updatedProducts.filter((p) => p.id !== id);
        return  updatedItems;
      }
    }
    case REMOVE:{
      const id = action.payload.id;
      const updatedProducts = [...state];
      const updatedItems = updatedProducts.filter((p) => p.id !== id);
      return updatedItems
    }
    default:
      return state;
  }
};

export default cartReducer;
