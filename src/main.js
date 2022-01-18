import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';

//新增reset-css 清除瀏覽器預設樣式
import "reset-css";
//新增element-ui全局設定
import 'element-ui/lib/theme-chalk/index.css';
//新增字型樣式
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'





Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
