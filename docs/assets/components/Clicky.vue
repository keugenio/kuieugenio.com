<template>
    <div class="d-flex flex-column align-items-center jusfity-content-center p-3">
        <button class="ml-auto" @click="$emit('close')">
            <i class="fa fa-close" />
        </button>
        <iframe class="mx-auto my-2" id="Clicky Project"
            title="Project to show React and consuming APIs"
            src="https://keugenio.github.io/clicky/">
        </iframe>
    </div>
</template>
<script>
export default {
    name: "Clicky",      
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
