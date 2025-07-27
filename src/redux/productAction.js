import {PRODUCT_LIST } from './constant'

export const productList = () => {
	let data = "hello"
	console.warn("productLIST action is called!", data);
	return {
		type: PRODUCT_LIST,
		data		
	}
}
