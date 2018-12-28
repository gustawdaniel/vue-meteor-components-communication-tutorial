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
                <tr><td>Vuex</td><td><AVuex></AVuex></td><td><BVuex></BVuex></td></tr>
                <tr><td>Tracker</td><td><ATracker></ATracker></td><td><BTracker></BTracker></td></tr>
                <tr><td>Mini Mongo</td><td><AMiniMongo></AMiniMongo></td><td><BMiniMongo></BMiniMongo></td></tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import ADom from './dom/In';
    import BDom from './dom/Out';
    import ABus from './event-bus/In';
    import BBus from './event-bus/Out';
    import AVuex from './vuex/In';
    import BVuex from './vuex/Out';
    import ATracker from './tracker/In';
    import BTracker from './tracker/Out';
    import AMiniMongo from './minimongo/In';
    import BMiniMongo from './minimongo/Out';

    export default {
        name: "App",
        components: { ADom, BDom, ABus, BBus, AVuex, BVuex, ATracker, BTracker, AMiniMongo, BMiniMongo }
    }
</script>
