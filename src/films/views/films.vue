<template>
  <div>
    <h3 class="title is-3">Films</h3>

    <table class="table">

      <thead>

        <th>CHARACTERS</th>
        <th>CREATED</th>
        <th>DIRECTOR</th>
        <th>EDITED</th>
        <th>EPISODE_ID</th>
        <th>OPENING_CRAWL</th>
        <th>PLANETS</th>
        <th>PRODUCER</th>
        <th>RELEASE_DATE</th>
        <th>SPECIES</th>
        <th>STARSHIPS</th>
        <th>TITLE</th>
        <th>URL</th>
        <th>VEHICLES</th>

      </thead>

      <tbody>
      <tr v-for="film in films" :key="film.url">
        <td>{{ film.characters }}</td>
        <td>{{ film.created }}</td>
        <td>{{ film.director}}</td>
        <td>{{ film.edited }}</td>
        <td>{{ film.episode_id  }}</td>
        <td>{{ film.opening_crawl }}</td>
        <td>{{ film.planets }}</td>
        <td>{{ film.producer }}</td>
        <td>{{ film.release_date }}</td>
        <td>{{ film.species }}</td>
        <td>{{ film.starships }}</td>
        <td>{{ film.title }}</td>
        <td>{{ film.url }}</td>
        <td>{{ film.vehicles }}</td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data: function () {
      return {
        films: []
      }
    },
    mounted: function () {


      axios.get('https://swapi.co/api/films').then((res) => {
        this.films = res.data.results;
        // success
      })


    },
    filters: {
      date: function (value) {
        return new Date(value).getFullYear();
      }
    }
  }

</script>

<style lang="sass" scoped>

</style>
