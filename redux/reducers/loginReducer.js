let defaultState = { accessToken: null }

let loginReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log("Login success")
            return {
                ...state,
                accessToken: action.payload
            }
        case 'LOGOUT':
            console.log("Logout success")
            return {
                accessToken: null
                }
    default:
        return state;
    }
};

export default loginReducer;