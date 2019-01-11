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
new Vue({
  render: h => h(App),
  // 挂载路由对象
  router:new VueRouter({
    routes:[
      {
        path:'/',
        component:index
      },
      {
        path:'/index',
        component:index
      }
    ]
  })
}).$mount('#app')
