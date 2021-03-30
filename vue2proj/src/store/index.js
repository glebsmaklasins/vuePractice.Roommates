import Vue from "vue";
import Vuex from "vuex";
import tasks from "../data/task"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {tasks},
  mutations: {
    appendTask: (state,task)=>{
      state.tasks.push(task)
    },
    deleteTask: (state,index)=>{
      state.tasks.splice(index,1)
    },

  },
  actions: {
    removeTask :({commit},index)=>{
      commit("deleteTask",index)
    },
    addTask:({commit},task)=>{
      commit("appendTask",task)
    },
    
  },
  modules: {},
});
