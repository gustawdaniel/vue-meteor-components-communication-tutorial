import Vue from 'vue';

import VueMeteorTracker from 'vue-meteor-tracker';   // here!
Vue.use(VueMeteorTracker);                           // here!

import App from '../imports/client/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    render: h => h(App)
  });
});
