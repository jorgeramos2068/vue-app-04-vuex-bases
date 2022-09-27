<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter }}</h2>
    <h2>Computed: {{ computedCounter }}</h2>
    <h2>Map state: {{ counter }}</h2>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="incrementRandomFromStore()">Random</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    computedCounter() {
      return this.$store.state.counter;
    },
    ...mapState({
      counter: state => state.counter,
    }),
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    incrementBy(value) {
      this.$store.commit('incrementBy', value);
    },
    // incrementRandom() {
    //   this.$store.dispatch('incrementRandom');
    // },
    ...mapActions({
      incrementRandomFromStore: 'incrementRandom',
    }),
  },
};
</script>
