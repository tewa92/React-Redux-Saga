import { createStore } from 'redux';

const dummyFile = () => {
	return 100;
}

const store = createStore(dummyFile);

export default store;