let defaultState = {
    dataUser: { data:[], username:'', name:'', phone:'', email:'', address:''}
}

let authReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TO_INFOR': 
        {
            let newState = { ...state };
                console.log('ADD_TO_INFOR')
                newState.dataUser = {
                    data: [...newState.dataUser.data, action.payload],
                    username: action.payload.username,
                    name: action.payload.name,
                    phone: action.payload.phone,
                    email: action.payload.email,
                    address: action.payload.address

                };
                console.log(newState);
                return newState;
        }
        default:
            return state;
    }
};

export default authReducer;