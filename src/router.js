import VueRouter from 'vue-router';
import PlanetsComponent from './planets/views/planets'
import FilmsComponent from './films/views/films'
import FilmComponent from './films/views/film'
import StoreComponent from './views/store'
import FavouriteFilmsComponent from './films/views/favourite-films'
import LoginComponent from './auth/views/login'
import RegistrationComponent from './auth/views/registration'


const routes = [
  { path: '', redirect: '/planets'},
  { path: '/planets',
    component: PlanetsComponent,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem('user')) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  },
  // { path: '/people', component: PeopleComponent },
  { path: '/films', component: FilmsComponent },
  {
    path: '/films/:id',
    component: FilmComponent,
    name: 'filmPage',
    beforeEnter: function (to, from, next) {
      //
      next();
    },
    meta: {
      requiredAuth: true
    }
  },
  { path: '/favourite-films', component: FavouriteFilmsComponent },

  { path: '/login', component: LoginComponent },
  { path: '/registration', component: RegistrationComponent },

  { path: '/store', component: StoreComponent },
  {
    path: '**',
    redirect: '/planets'
  }
];




const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router
