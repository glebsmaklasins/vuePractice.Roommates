import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import TaskList from "../views/Task-list.vue"
import LadderBoard from "../views/Ladder-board.vue"
import Task from "../views/Task.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ladder",
    name: "Ladderboard",
    component: LadderBoard,
  },
  {
    path: "/tasks",
    name: "Task list",
    component: TaskList,
  },
  {
    path: "/tasks/:id",
    name: "task",
    component: Task,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
