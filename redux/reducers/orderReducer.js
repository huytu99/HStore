let defaultState = {
    dataBill: { items:[], title:'', price:'', image:''}
}

let orderReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TO_ORDER': 
        {
            console.log('ADD TO ORDER')
            let newState = { ...state };
                newState.dataBill = {
                    items: [...newState.dataBill.items, action.payload],
                    title: action.payload.title,
                    price: action.payload.price,
                    image: action.payload.image,

                };
                console.log(newState)
                return newState;
        }
        default:
            return state;
    }
};

export default orderReducer;