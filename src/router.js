import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fraction",
      name: "fraction",
      component: () => import("./views/Fraction.vue")
    },
    {
      path: "/websocket",
      name: "websocket",
      component: () => import("./views/Websocket.vue")
    }
  ]
});
