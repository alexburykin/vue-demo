<template>
  <div>
      <h3 class="title is-3">{{ film.title }}</h3>

      <div v-if="error" class="error"> {{ error }} </div>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';

  export default  {
    data: function () {
      return {
        film: {},
        error: ''
      }
    },
    mounted() {
      axios.get(`https://swapi.co/api/films/${this.$route.params.id}`).then( res => {
        this.film = res.data
      }, err => {
        this.error = err.toString();
      })
    }
  }
</script>

<style lang="sass" scoped>
  .error
    color: red
</style>
