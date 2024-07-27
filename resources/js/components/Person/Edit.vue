<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" class="form-control" v-model="name" placeholder="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" v-model="age" placeholder="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" v-model="job" placeholder="job">
        </div>
        <div class="mb-3">
            <input @click.prevent="update" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "../../router.js";

export default {
    name: "Edit",
    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get('/api/people/' + this.$route.params.id)
                .then( res => {
                    this.name = res.data.name
                    this.age = res.data.age
                    this.job = res.data.job
                })
        },

        update() {
            axios.patch('/api/people/' + this.$route.params.id, {name: this.name, age: this.age, job: this.job})
                .then( res => {
                    router.push({ name:'person.show'})
                })
        }
    }
}
</script>

<style scoped>

</style>
