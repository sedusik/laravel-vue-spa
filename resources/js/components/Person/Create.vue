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
            <input @click.prevent="store" type="submit" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Create",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    methods: {
        store() {
            axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
                .then( res => {
                    this.$router.push({ name: 'person.index'})
                })
        }
    },

}
</script>

<style scoped>

</style>
