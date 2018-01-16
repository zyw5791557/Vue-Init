import * as types from './mutation-types';


/**
 * @function increment 增加数量
 */
export const increment = ({ commit, state }, n) => {
    commit('SET_COUNT_INCREMENT')
}

/**
 * @function decrement 减少数量
 */
export const decrement = ({ commit, state }, n) => {
    commit('SET_COUNT_DECREMENT')
}
