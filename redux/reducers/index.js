import { combineReducers } from "redux";

import itemReducer from "./itemReducer";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";

let reducers = combineReducers({
    itemReducer: itemReducer,
    authReducer: authReducer,
    loginReducer: loginReducer,
})

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;