import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Cars from "../pages/Cars.vue";
import Pricing from "../pages/Pricing.vue";
import BlogPage from "../pages/BlogPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import Contact from "../pages/Contact.vue";
import CarDetails from "../pages/CarDetails.vue";
import BlogDetails from "../pages/BlogDetails.vue";
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
        component: BlogPage,
      },
      {
        path: "/car/:id",
        name: "carDetails",
        component: CarDetails,
      },
      {
        path: "/services",
        name: "services",
        component: ServicesPage,
      },
      {
        path: "/blog/:id",
        name: "blogDetails",
        component: BlogDetails,
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
