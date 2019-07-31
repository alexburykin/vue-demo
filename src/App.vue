<template>
  <div id="app">

    <aside class="menu">
      <div class="logo">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <ul class="menu-list">
        <li><router-link to="/planets" active-class="is-active">Planets</router-link></li>
        <li><router-link to="/people" active-class="is-active">People</router-link></li>
        <li><router-link to="/films" active-class="is-active">Films</router-link></li>
      </ul>
    </aside>

    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
  export default {
    name: 'app',
    // components: {
    //   HelloWorld,
    // },
  };
</script>

<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    margin-top: 60px
    display: flex

    .logo
      text-align: center
      img
        max-width: 60px

    .menu
      flex-basis: 280px
      min-width: 280px

    main
      padding: 25px
      overflow: scroll

</style>
