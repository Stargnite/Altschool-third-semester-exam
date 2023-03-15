import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./../components/Home.vue";
import About from "./../components/About.vue";
import RepoList from "../views/RepoList.vue";
import RepoContent from "../views/RepoContent";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },

  {
    path: "/repoList",
    name: "repoList",
    component: RepoList,
    children: [
      { path: ":id",
      component: RepoContent,
      props: true
    },
    ],
  },
  {
    path: "/repoContent",
    name: "repoContent",
    component: RepoContent,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
