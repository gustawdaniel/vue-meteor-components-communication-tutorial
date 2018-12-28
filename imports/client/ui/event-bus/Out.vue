<template>

    <p class="m-2" id="dom-target">{{value}}</p>

</template>

<script>
    import EventBus from '../../EventBus';

    export default {
        data() {
            return {
                value: null
            }
        },
        mounted() {
            EventBus.$on('update', (value) => {
                this.value = value;
            })
        }
    }
</script>
