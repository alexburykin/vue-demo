<template>
  <div>

    <div class="columns">
      <div class="column">
        <h3 class="title is-3">Films</h3>
      </div>
      <div class="column">
        <router-link tag="button" to="favourite-films" class="button">Favourites Films</router-link>
      </div>
    </div>

    <div class="columns">
      <div class="column filter-form">
        <form @submit.prevent="filterFilms">
          <div class="control has-icons-right">
            <input @input="filterFilms" v-model="filters.search" class="input" type="text" placeholder="Type your query">
            <span class="icon is-right">
            <i class="fa fa-search"></i>
          </span>
          </div>

          <div class="control has-icons-right">
            <select @change="filterFilms" v-model="filters.search" class="input">
              <option value="">Select Category</option>
              <option value="New Hope">New Hope</option>
              <option value="Attack">Attack</option>
            </select>
          </div>

          <button type="submit" class="button is-primary">Search</button>
        </form>
      </div>

      <div class="column">
        <table class="table">

          <thead>

          <th>ADD TO FAVOURITES</th>
          <!--<th>CHARACTERS</th>-->
          <th>TITLE</th>
          <th>CREATED</th>
          <!--<th>DIRECTOR</th>-->
          <!--<th>EDITED</th>-->
          <!--<th>EPISODE_ID</th>-->
          <!--&lt;!&ndash;<th>OPENING_CRAWL</th>&ndash;&gt;-->
          <!--<th>PLANETS</th>-->
          <!--<th>PRODUCER</th>-->
          <!--<th>RELEASE_DATE</th>-->
          <!--<th>SPECIES</th>-->
          <!--<th>STARSHIPS</th>-->
          <!--<th>URL</th>-->
          <!--<th>VEHICLES</th>-->

          </thead>

          <tbody>
          <tr v-for="film in films" :key="film.url">
            <td>
          <span @click="addFilmToFavourites(film)" class="icon">
            <i class="fa fa-plus"></i>
          </span>
            </td>
            <!--<td>{{ film.characters }}</td>-->
            <td>{{ film.title }}</td>
            <td>{{ film.created }}</td>
            <!--<td>{{ film.director}}</td>-->
            <!--<td>{{ film.edited }}</td>-->
            <!--<td>{{ film.episode_id  }}</td>-->
            <!--&lt;!&ndash;<td>{{ film.opening_crawl }}</td>&ndash;&gt;-->
            <!--<td>{{ film.planets }}</td>-->
            <!--<td>{{ film.producer }}</td>-->
            <!--<td>{{ film.release_date }}</td>-->
            <!--<td>{{ film.species }}</td>-->
            <!--<td>{{ film.starships }}</td>-->
            <!--<td>{{ film.url }}</td>-->
            <!--<td>{{ film.vehicles }}</td>-->
          </tr>
          </tbody>

        </table>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/store.js';

  export default {
    data: function () {
      return {
        films: [],
        filters: {
          search: '',
          category: '',
        },
      }
    },

    beforeCreate: function () {
    },

    mounted: function () {

      this.filters.search =  this.$route.query.search;
      this.filters.category =  this.$route.query.category;
      this.filterFilms();

      // debugger
      axios.get('https://swapi.co/api/films').then((res) => {
        this.films = res.data.results;
      })
    },
    filters: {
      date: function (value) {
        return new Date(value).getFullYear();
      }
    },
    methods: {
      addFilmToFavourites(film) {
        store.dispatch('addFilmToFavourites', film);
      },
      filterFilms() {
        axios.get(`https://swapi.co/api/films?search=${this.filters.search}`).then((res) => {
          this.films = res.data.results;
        })
      }

    },

  }

</script>

<style lang="sass" scoped>
  .filter-form
    min-width: 280px
    .control
      margin-bottom: 10px
</style>
