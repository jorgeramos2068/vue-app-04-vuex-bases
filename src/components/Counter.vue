<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter }}</h2>
    <h2>Computed: {{ computedCounter }}</h2>
    <h2>Map state: {{ counter }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    computedCounter() {
      return this.$store.state.counter;
    },
    ...mapState({
      counter: state => state.counter,
    }),
  },
};
</script>
