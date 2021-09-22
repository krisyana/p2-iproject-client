import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');