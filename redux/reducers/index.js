import { combineReducers } from "redux";

import itemReducer from "./itemReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    itemReducer: itemReducer,
    authReducer: authReducer,
})

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;