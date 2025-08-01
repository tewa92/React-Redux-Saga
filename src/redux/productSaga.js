import {takeEvery, put} from 'redux-saga/effects'
import {PRODUCT_LIST, SET_PRODUCT_LIST} from './constant'


function* getProducts(){
	let data = yield fetch('http://localhost:3001/product');
	data = yield data.json();
	console.warn("get product saga called!", data);
	yield put({type: SET_PRODUCT_LIST, data});
}

function* productSaga(){
	yield takeEvery(PRODUCT_LIST, getProducts )

}

export default productSaga