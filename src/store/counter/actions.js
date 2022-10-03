import getRandomInt from '@/helpers/getRandomInt';

export const incrementRandom = async context => {
  context.commit('setLoading', true);
  const randomInt = await getRandomInt();
  context.commit('incrementBy', randomInt);
  context.commit('setLoading', false);
};
