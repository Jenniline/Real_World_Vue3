import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/AboutView.vue";


const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
