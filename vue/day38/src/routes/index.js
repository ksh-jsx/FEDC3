import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";
import Docs from "./Docs.vue";
import DocsId from "./DocsId.vue";
import NotFound from "./NotFound.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/documents",
      component: Docs,
      children: [
        {
          path: ":id",
          name: "docsid",
          component: DocsId,
        },
      ],
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
