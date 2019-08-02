<template>
  <div>
    {{ count }}

    <button @click="updateCount" class="button is-primary">UpdateCount</button>
  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    methods: {
      updateCount() {
        this.$store.commit('increment', {
          message: 'i want to increment count',
          number: 10
        })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
