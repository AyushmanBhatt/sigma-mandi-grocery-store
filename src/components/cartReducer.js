const cartReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartOpen: action.payload.toggle
            };
        case 'ADD_TO_CART':
            const newItemId = action.payload.products.id;
            const itemExist = state.cartItems.some(products => products.id === newItemId);
            let updatedCartItems = null;
            if (itemExist) {
                updatedCartItems = state.cartItems.map(products => {
                    if (products.id === newItemId) {
                        return {
                            ...products,
                            quantity: products.quantity + 1
                        };
                    }
                    return products;
                });
            } else {
                updatedCartItems = [...state.cartItems, action.payload.products];
            }
            return {
                ...state,
                cartItems: updatedCartItems
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(products => products.id !== action.payload.itemId)
            };
        case 'INCREMENT':
            return {
                ...state,
                cartItems: state.cartItems.map(products => {
                    if (products.id === action.payload.itemId) {
                        return {
                            ...products,
                            quantity: products.quantity + 1
                        };
                    }
                    return products;
                })
            };
        case 'DECREMENT':
            return {
                ...state,
                cartItems: state.cartItems.map(products => {
                    if (products.id === action.payload.itemId) {
                        return {
                            ...products,
                            quantity: products.quantity - 1
                        };
                    }
                    return products;
                }).filter(products => products.quantity !== 0)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: []
            };
        case 'CREATE_PRODUCT':
            return {
                products: [action.payload, ...state.products],
            };
        default:
            return state;
    }
};

export default cartReducer;