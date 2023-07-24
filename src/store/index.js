import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 1,
      lastMutation: 'none',
    };
  },
});
