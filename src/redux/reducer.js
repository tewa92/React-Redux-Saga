// import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './constant'

// export const cartData = (data=[], action) =>{
// 	// if (action.type === ADD_TO_CART){
// 	// 	console.warn("ADD_TO_CART reducer called!", action);

// 	// 	return data
// 	// } else {
// 	// 	return "no action called"
// 	// }

// 	switch(action.type){
// 		case ADD_TO_CART:
// 			console.warn("ADD_TO_CART reducer called!", action);
// 			return [action.data, ...data]
// 		case REMOVE_FROM_CART:
// 			console.warn("REMOVE_FROM_CART reducer called!", action);
// 			data.length = data.length? data.length - 1 : []
// 			return [ ...data]
// 			//return data.slice(0, 1);
// 		case EMPTY_CART:
// 			console.warn("EMPTY_CART reducer called!", action);
// 			data = []
// 			return [ ...data]
// 		default:
// 			return data
// 	}
// }

import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant';

export const cartData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART reducer called!", action);
      return [action.data, ...state]; // Add item to beginning

    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART reducer called!", action);
      const indexToRemove = state.findIndex(item => item.name === action.data);
      if (indexToRemove === -1) return state;
      return [
        ...state.slice(0, indexToRemove),
        ...state.slice(indexToRemove + 1)
      ];

    case EMPTY_CART:
      console.warn("EMPTY_CART reducer called!", action);
      return []; // Clear cart immutably

    default:
      return state;
  }
};
