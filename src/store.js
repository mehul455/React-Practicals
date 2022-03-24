import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);  //all states in rootReducer

export default store;