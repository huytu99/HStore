let defaultState = {
    inforUser: { data:[], username:'', name:'', email:'', phone:'', address:'' }
}

let inforReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_INFOR_USER':
        {
            let newState = { ...state };
            console.log('ADD_INFOR_USER')
        newState.inforUser = {
            items: [...newState.inforUser.items, action.payload],
            username: action.payload.username,
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone,
            address: action.payload.address
        }; console.log(newState);
        return newState;
        }
        default:
            return state;
    }
};
export default inforReducer;