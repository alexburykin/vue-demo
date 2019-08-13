<template>
  <div>
    <div class="panel">
      <form @submit.prevent="login">

        <div class="field">
          <div class="control">
            <input v-validate.continues="'required|email'" v-model="user.email" name="email" ref="emailInput"
                   class="input is-primary" type="text" placeholder="my@awesome.com">

            <div style="color: red;" v-for="(err, i) in errors.collect('email')" :key="i"> {{err}} </div>
            <!--<span>{{ errors.first('email') }}</span>-->
            <!--<span>{{ errors.collect() }}</span>-->
          </div>
        </div>


        <div class="field">
          <div class="control">

            <input v-validate="'required'" v-model="user.password" name="password"
                   class="input is-primary" type="password" placeholder="Password">
          </div>
        </div>


        <button type="submit" class="button is-primary">LOGIN</button>

      </form>
    </div>
  </div>
</template>

<script>
  // import api from '@/shared/services/api.service.js'
  import axios from 'axios'

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
        this.$validator.validate().then(valid => {
          if (valid) {
            axios.post('http://soft-liger-29.localtunnel.me/api/accounts/sign-in', this.user)
              .then(res => {
                if (res.success) {
                  localStorage.setItem('user', JSON.stringify(res.user));
                  localStorage.setItem('token', JSON.stringify(res.token));
                  this.$router.push('/planets');
                }
              });
          } else {
            this.$refs.emailInput.focus();
          }
        });
      },
    }
  }

</script>

<style lang="sass" scoped>

</style>
