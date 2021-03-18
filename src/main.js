/**
 * @author dbarenholz
 * @description The main javascript file in a vue application.
 */

import Vue from "vue";
import App from "./App.vue";
import VueYoutube from "vue-youtube";

// vue-youtube
Vue.use(VueYoutube);

// buefy
import Buefy from "buefy";
Vue.use(Buefy, {
  defaultIconPack: "fas",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
