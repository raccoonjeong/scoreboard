import {createStore} from "redux";
import {allReducers} from "./reducers";

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // reduce라는 pure function이 필요함..
