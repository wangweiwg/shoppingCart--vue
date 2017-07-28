import Vue from "vue";
import app from "./app.vue";
import uiComponents from "./ui-components/ui-components.js";

Vue.use(uiComponents);

new Vue({
	el : "#app",
	components : {
		app
	}
});