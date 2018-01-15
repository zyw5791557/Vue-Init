import * as types from './mutation-types';

const mutations = {
	[types.SET_COUNT_INCREMENT](state, n) {
		state.count ++ ;
	},
	[types.SET_COUNT_DECREMENT](state, n) {
		state.count -- ;
	},
};

export default mutations;