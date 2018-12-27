<template>

    <div>
    <h1>App</h1>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <td>Method</td>
                    <td>Input</td>
                    <td>Output</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dom</td>
                    <td><ADom></ADom></td>
                    <td><BDom></BDom></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import ADom from './dom/In';
    import BDom from './dom/Out';

    export default {
        name: "App",
        components: { ADom, BDom }
    }
</script>
