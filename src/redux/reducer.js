import {ADD_TO_CART} from './constant'

export const cartData = (data=[], action) =>{
	if (action.type === ADD_TO_CART){
		console.warn("ADD_TO_CART reducer called!", action);

		return data
	} else {
		return "no action called"
	}
	return 10
}