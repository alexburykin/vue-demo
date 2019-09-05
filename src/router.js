import VueRouter from 'vue-router';
import PlanetsComponent from './planets/views/planets'
import FilmsComponent from './films/films'
import FilmComponent from './films/film'
import FavouriteFilmsComponent from './films/favourite-films'
import LoginComponent from './auth/views/login'
import ChatComponent from './chat/chat'
import RegistrationComponent from './auth/views/registration'


const routes = [
  { path: '', redirect: '/planets'},
  { path: '/planets',
    component: PlanetsComponent,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem('user')) {
        // debugger
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
  { path: '/chat', component: ChatComponent },
  { path: '/registration', component: RegistrationComponent },
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
