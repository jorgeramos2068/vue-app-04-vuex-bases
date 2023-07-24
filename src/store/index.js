import { createStore } from 'vuex';
import getRandomInt from '../helpers/getRandomInt';

export default createStore({
  state() {
    return {
      counter: 1,
      lastMutation: 'none',
      isLoading: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
      state.lastMutation = 'increment';
    },
    incrementBy(state, value) {
      state.counter += value;
      state.lastMutation = 'incrementBy';
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    async incrementRandom(context) {
      context.commit('setLoading', true);
      const randomInt = await getRandomInt();
      context.commit('incrementBy', randomInt);
      context.commit('setLoading', false);
    },
  },
});
