import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IMG from '@/components/image'
import manage from '@/components/key'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/index",
      name:"manage",
      component:manage,
      children:[
        {
          path:"/generater",
          name:"generater",
          component:IMG
        }
      ]
    },

  ]
})
