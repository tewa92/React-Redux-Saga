import {ADD_TO_CART} from './constant'

export const cartData = (data=[], action) =>{
	// if (action.type === ADD_TO_CART){
	// 	console.warn("ADD_TO_CART reducer called!", action);

	// 	return data
	// } else {
	// 	return "no action called"
	// }

	switch(action.type){
		case ADD_TO_CART:
			console.warn("ADD_TO_CART reducer called!", action);
			return 1+1
		default:
			return "no action called"
	}
}