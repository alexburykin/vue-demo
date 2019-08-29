<template>
  <div>
    <h3 class="title is-3">Planets</h3>

    <table class="table">

      <thead>

      <th>CLIMATE</th>
      <th>CREATED</th>
      <th>DIAMETER</th>
      <th>EDITED</th>
      <th>FILMS</th>
      <th>GRAVITY</th>
      <th>NAME</th>
      <th>ORBITAL_PERIOD</th>
      <th>POPULATION</th>
      <th>RESIDENTS</th>
      <th>ROTATION_PERIOD</th>
      <th>SURFACE_WATER</th>
      <th>TERRAIN</th>
      <th>URL</th>

      </thead>

      <tbody>
      <tr v-for="planet in planets" :key="planet.url">
        <td>{{ planet.climate | capitalize}}</td>
        <td>{{ planet.created | date }}</td>
        <td>{{ planet.diameter }}</td>
        <td>{{ planet.edited }}</td>
        <td>
            <span v-for="url in planet.films" :key="url">
              <router-link :to="{ name: 'filmPage', params: {id:  getFilmId(url)} }">{{ url }}</router-link>
            </span>
            <br>
        </td>
        <td>{{ planet.gravity }}</td>
        <td>{{ planet.name }}</td>
        <td>{{ planet.orbital_period }}</td>
        <td>{{ planet.population }}</td>
        <td>{{ planet.residents }}</td>
        <td>{{ planet.rotation_period }}</td>
        <td>{{ planet.surface_water }}</td>
        <td>{{ planet.terrain }}</td>
        <td>{{ planet.url }}</td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import api from '@/shared/services/api.service.js'


  export default {
    data: function () {
      return {
        planets: []
      }
    },
    mounted: function () {


      api.get('https://swapi.co/api/planets').then((res) => {
        this.planets = res.data.results;
        // success
      })


    },
    filters: {
      date: function (value) {
        return new Date(value).getFullYear();
      }
    },
    methods: {
      getFilmId: function (url) {
        let arr = url.split('/');
        return arr[arr.length - 2]
      }
    }
  }

</script>

<style lang="sass" scoped>

.test
  color: red;
p
  background-color: #fff

p

</style>
