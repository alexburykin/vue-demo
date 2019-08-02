<template>
  <div>
    <div class="panel">
      <form @submit.prevent="login">

        <div class="field">
          <div class="control">
            <input v-model="user.email" class="input is-primary" type="email" placeholder="my@awesome.com">
          </div>
        </div>


        <div class="field">
          <div class="control">
            <input v-model="user.password" class="input is-primary" type="password" placeholder="Password">
          </div>
        </div>


        <button type="submit" class="button is-primary">LOGIN</button>


      </form>
    </div>
  </div>
</template>

<script>
  import api from '@/shared/services/api.service.js'

  export default {

    data: function() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        setTimeout(() => {
          this.saveUser({
            token: 'sdfsadjfoiu90u90234mflkasdfasdf0w3r',
            user: {
              firstName: 'Vasya',
              lastName: 'Pupkin',
              photo: 'https://www.placecage.com/200/300'
            }
          })
        }, 2000)
      },

      saveUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        api.init('https://swapi.co/api');
        this.$router.push('/planets');
      }
    }
  }

</script>

<style lang="sass" scoped>

</style>
