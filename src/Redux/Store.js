import { createStore } from "redux";
import cartReducer from "./Cart/CartReducer";

const store = createStore(cartReducer);

export default store;
