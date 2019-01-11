import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// use一下
Vue.use(VueRouter);
// 全局样式
import './assets/statics/site/css/style.css';

Vue.config.productionTip = false

// 导入额外的组件 路由使用的
import index from './components/index.vue'
import detail from './components/02.details.vue'
import login from './components/03.login.vue'
new Vue({
  render: h => h(App),
  // 挂载路由对象
  router: new VueRouter({
    routes: [
      // {
      //   path:'/',
      //   component:index
      // },
      // 使用重定向 把/ 定位到 /index
      // 重定向居多 多个地址对应到同一个组件时
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        component: index
      },
      {
        path: '/detail',
        component: detail
      },
      {
        path: '/login',
        component: login
      }
    ]
  })
}).$mount('#app')