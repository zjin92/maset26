import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'
// use一下
Vue.use(VueRouter);
// 全局样式
import './assets/statics/site/css/style.css';

// 导入element-ui
import ElementUI from 'element-ui'; // js
import 'element-ui/lib/theme-chalk/index.css';//css
Vue.use(ElementUI); // vue的插件

// 全局导入axios
import axios from "axios";
// 设置到了Vue的原型上 目的是让所有的 Vue实例共享
Vue.prototype.$axios = axios;

// axios 支持设置基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899/';




Vue.config.productionTip = false

// 导入额外的组件 路由使用的
import index from './components/index.vue'
import detail from './components/02.details.vue'
import login from './components/03.login.vue'
import userCenter from './components/04.userCenter.vue'
// 嵌套路由的组件
import centerIndex from './components/05.userCenterIndex.vue'
import centerOrder from './components/06.userCenterOrder.vue'
import centerOrderDetail from './components/07.userCenterOrderDetail.vue'
new Vue({
  render: h => h(App),
  // 挂载路由对象
  router: new VueRouter({
    routes: [
      // {
      //   path:'/',
      //   component:index
      // },
      // 使用重定向 把/ 定位到 /inW13 ex
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
        path: '/detail/:id',
        component: detail
      },
      {
        path: '/login',
        component: login
      },
      {
        path: '/userCenter',
        component: userCenter,
        children: [{
            // 匹配到 /userCenter/index
            // path:'index', // 不要写 /
            path: '', // 不要写 /
            // 重定向
            redirect: 'index'
          },
          {
            path: 'index',
            component: centerIndex
          }, {
            path: 'order',
            component: centerOrder
          },
          {
            path: 'orderDetail',
            component: centerOrderDetail
          },
        ]
      }
    ]
  })
}).$mount('#app')