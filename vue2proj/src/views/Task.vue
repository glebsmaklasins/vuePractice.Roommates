<template>
    <div>
        <h2>{{task.chore}}</h2>
        <p>{{task.description}}</p>
        <h1>POINTS : {{task.points}}</h1>
        <img :src='task.image' alt="">
        
    </div>
</template>
<script>

import {mapState} from "vuex"
export default {
    data(){
        return {
            task:{}

        }
    },
    computed : {
        ...mapState(["tasks"])
    },
    mounted() {
        this.task=this.tasks[this.$route.params.id]
    },
}
</script>