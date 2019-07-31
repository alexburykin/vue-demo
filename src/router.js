import VueRouter from 'vue-router';
import PlanetsComponent from './planets/views/planets'
import FilmsComponent from './films/views/films'
import FilmComponent from './films/views/film'


const routes = [
  { path: '', redirect: '/planets'},
  { path: '/planets', component: PlanetsComponent },
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
