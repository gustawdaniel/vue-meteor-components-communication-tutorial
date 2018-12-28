import Vue from 'vue';

import '../imports/client/plugins/tracker'
import '../imports/client/plugins/vuex'
import store from '../imports/client/vuex/store';

import App from '../imports/client/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    store,
    render: h => h(App)
  });
});
