import { act } from "react-dom/test-utils";

export const initialState={
    basket: [
        // {
        //     id: "238724",
        //     title: "New Apple ipad pro (12.9) inch",
        //     price: 599.98,
        //     rating: 4,
        //     image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        // },
        // {
        //     id: "325325",
        //     title: "Watch new apple series generation 5",
        //     price: 239.98,
        //     rating: 3,
        //     image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        // }
],
    user: null
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
        //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
        //Logic for removing item from basket
            let newBasket = [...state.basket];
            const index = newBasket.findIndex((basketItem)=> basketItem.id === action.id)
            if (index >=0){
                newBasket.splice(index, 1);
            }
            return {...state, 
                basket: newBasket}
            break;
        default:
            return state; 
    }
}

export default reducer;