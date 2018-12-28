<template>

    <p class="m-2" id="dom-target">{{value}}</p>

</template>

<script>
    import dependency from '../../Dependency';

    export default {
        data() {
            return {
                value: null
            }
        },
        created() {
            Tracker.autorun(() => {
                dependency.depend();
                this.value = window.localStorage.getItem('value');
            });
        }
    }
</script>
