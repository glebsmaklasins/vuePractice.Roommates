<template>
    <div>
        <h1>TASK LIST</h1>
        <button @click="toggleTaskForm" class="btn btn-primary">add a task</button>

        <b-form @submit.prevent="handleSubmit"  v-if="showTaskForm">


      <b-form-group id="input-group-2" label="Task" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.chore"
          placeholder="Enter Task"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Schedule" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.schedule"
          :options="['daily','weekly','monthly']"
          required
        ></b-form-select>
      </b-form-group>

           <b-form-group id="input-group-2" label="Description" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.description"
          placeholder="Enter Description"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Points" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.points"
          placeholder="Enter Amount of points Awarded"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Image URL" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.image"
          placeholder="Enter an image URL"
         
        ></b-form-input>
      </b-form-group>



      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
     <b-table striped hover :items="tasks" :fields="fields">
        <template #cell(chore)="data">

         <router-link :to="`/tasks/${data.index}`">{{ data.value }}</router-link>
      </template>
      <template #cell(delete)="x">
         <b-button size="sm" @click="handleDelete" class="mr-2">
          {{x.field.key}}
        </b-button>
      </template>
         
        
     </b-table>
    </div>
</template>

<script>

import {mapState} from "vuex"
import {mapActions} from "vuex"
export default {
    data(){
        return {
            showTaskForm:false,
            fields:["chore","schedule","points","delete"],
            formData:{
                chore:"",
                schedule:"",
                description:"",
                image:"",
                points:""
            }
           
        }
    },
    computed : {
        ...mapState(["tasks"])
    },
    methods: {
        ...mapActions([
            'addTask',
            'removeTask'
        ]),
        toggleTaskForm(){
            this.showTaskForm= !this.showTaskForm
        },
        handleSubmit(){
            const {chore,schedule,description,points,image}=this.formData
            const task = {
                chore,schedule,description,points,image
            }
            this.addTask(task)
            this.toggleTaskForm()
        },
        handleDelete(){
            this.removeTask(this.index)
        }
    },
}
</script>