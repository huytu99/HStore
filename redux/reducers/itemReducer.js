let defaultState = {
    selectItems: { items:[], title:'', price:'', image:'',describe:'', quantity: ''}
}

let itemReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': 
        {
            let newState = { ...state };
                    console.log('ADD TO CART')
                newState.selectItems = {
                    items: [...newState.selectItems.items, action.payload],
                    title: action.payload.title,
                    price: action.payload.price,
                    image: action.payload.image,
                    describe: action.payload.describe,
                    quantity: action.payload.quantity,
                };
                console.log(newState);
                return newState;
                
        }
        case 'REMOVE_FROM_CART':
            {
                let newState = { ...state };
                console.log('REMOVE FROM CART')
                newState.selectItems = {
                    items: [
                        ...newState.selectItems.items.filter(
                            (selectItems) => selectItems.title !== action.payload.title),
                    ],
                    }
                return newState;
            }
        
        default:
            return state;
    }
};

export default itemReducer;