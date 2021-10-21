import { createStore } from "redux";
import { countReducer } from "./counterreducer";

const store = createStore(countReducer)
export default store