<template xmlns:v-slot="http://www.w3.org/1999/xhtml">
  <div id="app">

    <aside class="menu">
      <div class="logo">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <ul class="menu-list">


        <nav-link v-for="link in links" :url="link" :key="link"><span>{{link}}</span></nav-link>

        <!--<li><router-link to="/planets" active-class="is-active">Planets</router-link></li>-->
        <!--<li><router-link to="/people" active-class="is-active">People</router-link></li>-->
        <!--<li><router-link to="/films" active-class="is-active">Films</router-link></li>-->
        <!--<li><router-link to="/store" active-class="is-active">Store</router-link></li>-->
      </ul>

      <div class="info-widget">
        <button class="button is-warning logout" @click="logout">LOGOUT</button>
        <div>
          favorite count:
          {{ favouriteFilmsCount }}
        </div>
      </div>

    </aside>

    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
  import navLink from '@/components/nav-link';

  export default {
    name: 'app',
    data: function() {
      return {
        links: [
          'planets',
          'films',
        ]
      }
    },
    components: {
      navLink: navLink
    },
    computed: {
      favouriteFilmsCount() {
        return this.$store.getters.favouriteFilmsCount;
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('user');
        this.$router.push('/planets');
      }
    }
  };
</script>

<style lang="sass" scoped>
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
      width: 100%
  .linkClass
    color: red

  .logout
    margin: 30px 0 20px

  .info-widget
    padding: 10px

</style>
