import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import IMG from '@/components/image'
import manage from '@/components/key'
Vue.use(Router)

var router = new Router({
  routes:[
    {
      path:"/index",
      name:"index",
      component:resolve =>require(['./../pages/home.vue'],resolve),
      children:[
        {
          path:"calculate",
          name:"manage",
          component:resolve => require(['./../components/key.vue'],resolve)
        },
        {
          path:"generater",
          name:"generater",
          component:resolve => require(['./../components/image.vue'],resolve)
        },
        {
          path:"line",
          name:"line",
          component:resolve => require(['./../components/line.vue'],resolve)
        },
        {
          path:"talk",
          name:"talk",
          component:resolve => require(['./../pages/conversation.vue'],resolve)
        }
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  next();
})

export default router