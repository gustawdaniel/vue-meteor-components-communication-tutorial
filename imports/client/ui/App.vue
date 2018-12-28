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
                <tr><td>Dom</td><td><ADom></ADom></td><td><BDom></BDom></td></tr>
                <tr><td>Event Bus</td><td><ABus></ABus></td><td><BBus></BBus></td></tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import ADom from './dom/In';
    import BDom from './dom/Out';
    import ABus from './event-bus/In';
    import BBus from './event-bus/Out';

    export default {
        name: "App",
        components: { ADom, BDom, ABus, BBus }
    }
</script>
