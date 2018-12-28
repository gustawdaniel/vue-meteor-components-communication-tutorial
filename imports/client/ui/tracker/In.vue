<template>

    <input class="form-input" type="text" @keyup="update">

</template>

<script>
    import dependency from '../../Dependency';

    export default {
        methods: {
            update(event) {
                window.localStorage.setItem('value', event.target.value);
                dependency.changed();
            }
        },
        created() {
            window.localStorage.clear();
        }
    }
</script>
