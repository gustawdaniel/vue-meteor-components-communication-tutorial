<template>

    <input class="form-input" type="text" @keyup="update">

</template>

<script>
    export default {
        methods: {
            update(event) {
                this.$store.commit('update', event.target.value)
            }
        }
    }
</script>
