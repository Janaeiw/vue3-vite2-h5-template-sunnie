import { createApp } from 'vue';
import App from './App.vue';
import { nutUiComponents } from './plugins/nutUI';
// import { vantUiComponents } from './plugins/vantUI';
import { i18n } from '/@/i18n';
import router from './router';
import { setupStore } from '/@/store';
import directives from './directive/index.js'; // 自定义指令
import './assets/app.css';

const app = createApp(App);
app.use(router);
setupStore(app);
directives.buttonAuth(app); // 按钮权限
app.use(i18n);
app.mount('#app');

// nutUi按需加载
nutUiComponents.forEach((item) => {
  app.use(item);
});

// vantUi按需加载
// vantUiComponents.forEach((item) => {
//   app.use(item);
// });
