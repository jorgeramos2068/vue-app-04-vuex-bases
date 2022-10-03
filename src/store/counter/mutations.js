export const increment = state => {
  state.counter++;
  state.lastMutation = 'increment';
};

export const incrementBy = (state, value) => {
  state.counter += value;
  state.lastMutation = 'incrementBy';
};

export const setLoading = (state, value) => {
  state.isLoading = value;
};
