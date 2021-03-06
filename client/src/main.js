import { createApp } from 'vue'
import App from './App.vue'

// import Vue from 'vue'

import '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/infinite-row-model';
import '@ag-grid-community/csv-export';

import { createLogger } from 'vue-logger-plugin' 

// make sure to set this synchronously immediately after loading Vue
// Vue.config.devtools = true

const app = createApp(App)
app.use(createLogger({
    // If you need options
}))

app.config.devtools = true

app.mount('#app')
