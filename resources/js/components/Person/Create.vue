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
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('store', {name, age, job})" type="submit" value="Add" class="btn btn-primary">
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

    },

    computed: {
        isDisabled() {
            return this.name && this.age && this.job
        },
    }

}
</script>

<style scoped>

</style>
