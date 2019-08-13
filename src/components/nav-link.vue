<template>
  <div>
    <li>
      <router-link :to="'/' + url" active-class="is-active">
        <slot></slot>
      </router-link>
    </li>
  </div>
</template>

<script lang="ts">

  export default {
    props: {
      url: String
    }
  }
</script>

<style lang="sass" scoped>
  .linkClass
    color: green!important
</style>
