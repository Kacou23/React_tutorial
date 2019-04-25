const initialState = {
    products: [{
        id: 0,
        title: 'test'
    }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
              products: action.payload
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            };
        default:
            return state;
    }
}