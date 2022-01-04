import { combineReducers } from "redux";

import itemReducer from "./reducers/itemReducer";
import authReducer from "./reducers/inforReducer";
import loginReducer from "./reducers/loginReducer";
import orderReducer from "./reducers/orderReducer"

let reducers = combineReducers({
    itemReducer: itemReducer,
    authReducer: authReducer,
    loginReducer: loginReducer,
    orderReducer: orderReducer
})

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;