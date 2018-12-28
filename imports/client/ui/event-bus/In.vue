<template>

    <input class="form-input" type="text" v-model="value" @keyup="update">

</template>

<script>
    import EventBus from '../../EventBus';

    export default {
        data() {
            return { value: null }
        },
        methods: {
            update() {
                EventBus.$emit('update', this.value)
            }
        }
    }
</script>
