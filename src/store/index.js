import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 1,
      lastMutation: 'none',
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
  },
});
