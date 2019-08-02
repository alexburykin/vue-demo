import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({

  state: {
    count: 0,
    favouriteFilms: []
  },

  mutations: {
    increment (state, payload) {
      if (payload.number) {
        state.count += payload.number;
      } else {
        state.count++
      }
    },
    addFilmToFavourites(state, film) {
      state.favouriteFilms.push(film);
    }
  },

  actions: {
    addFilmToFavourites(context, film) {
      if (context.state.favouriteFilms.includes(film)) {
        return false;
      } else {
        context.commit('addFilmToFavourites', film);
      }

    }
  },

  getters: {
    favouriteFilmsCount(state) {
      return state.favouriteFilms.length;
    }
  }




});

export default store
