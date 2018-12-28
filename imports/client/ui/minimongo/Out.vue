<template>

    <p class="m-2">{{valueObject.value}}</p>

</template>

<script>
    import { Values } from '../../Values';

    export default {
        meteor: {
            valueObject() {
                return Values.findOne('value');
            }
        }
    }
</script>
