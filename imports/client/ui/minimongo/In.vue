<template>

    <input class="form-input" type="text" @keyup="update">

</template>

<script>
    import { Values } from '../../Values';

    export default {
        methods: {
            update(event) {
                Values.upsert('value', {$set: {value: event.target.value}})
            }
        },
        created() {
            Values.upsert('value', {$set: {value: null}});
        }
    }
</script>
