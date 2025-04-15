import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Cars from "../pages/Cars.vue";
import Pricing from "../pages/Pricing.vue";
import Blog from "../pages/Blog.vue";
import Services from "../pages/Services.vue";
import Contact from "../pages/Contact.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/cars",
        name: "cars",
        component: Cars,
      },
      {
        path: "/pricing",
        name: "pricing",
        component: Pricing,
      },
      {
        path: "/blog",
        name: "blog",
        component: Blog,
      },
      {
        path: "/services",
        name: "services",
        component: Services,
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
