<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.counter }}</h2>
    <h2>Computed: {{ computedCounter }}</h2>
    <h2>Map state: {{ counter }}</h2>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="incrementRandomFromStore()" :disabled="isLoading">
      Random
    </button>
    <h2>Direct getter: {{ $store.getters['counter/squareCounter'] }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    computedCounter() {
      return this.$store.state.counter.counter;
    },
    // ...mapState('counter', ['counter', 'isLoading'])
    ...mapState({
      counter: state => state.counter.counter,
      isLoading: state => state.counter.isLoading,
    }),
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment');
    },
    incrementBy(value) {
      this.$store.commit('counter/incrementBy', value);
    },
    // incrementRandom() {
    //   this.$store.dispatch('counter/incrementRandom');
    // },
    ...mapActions({
      incrementRandomFromStore: 'counter/incrementRandom',
    }),
    // ...mapActions('counter', ['incrementRandom'])
  },
};
</script>
