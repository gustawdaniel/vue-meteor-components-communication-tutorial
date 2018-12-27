<template>

    <input class="form-input" type="text" ref="input" @keyup="update">

</template>

<script>
    export default {
        methods: {
            update() {
                document.querySelector('#dom-target').innerHTML = this.$refs.input.value;
            }
        }
    }
</script>
