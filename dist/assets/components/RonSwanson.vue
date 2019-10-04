<template>
    <div class="d-flex flex-column align-items-center jusfity-content-center p-3">
        
        <button class="ml-auto" @click="$emit('close')">
            <i class="fa fa-close" />
        </button>
        <div v-if="loading" class="fa-3x"><i class="fa fa-cog fa-spin"></i><span >This app runs on Heroku with limited dynos. The first time it runs, it takes a long time to wake up the app.  Please be patient as it loads</span></div>
        <iframe v-on:load="toggleOnLoadIcon" class="mx-auto my-2" id="RonSwanson"
            src="https://ron-swanson-2019.herokuapp.com/">
        </iframe>
    </div>
</template>
<script>
export default {
    name: "RonSwanson",
    data: function(){
        return {
            loading:true,
        }
    },
    methods: {
        toggleOnLoadIcon(){
            this.loading = false;
        },
    }   
}
</script>
<style>
iframe {
    border: 1px solid black;
    width: 85vw;
    height: 60vw;
}
.fa-close {
    font-size: 1.5rem;
}
</style>
