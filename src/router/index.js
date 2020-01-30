import Vue from 'vue'
import Router from 'vue-router'
import NavBar from '../pages/NavBar/NavBar.vue'
import home from '../pages/Home/home.vue'
import deliciousFood from '../pages/DeliciousFood/deliciousFood.vue'
import guessLikeDetails from '../pages/GuessLikeDetails/guessLikeDetails.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
      path: '/city',
      component: NavBar,
      name:'city'
    },
    {
      path: '/home',
      component: home,
      name:'home'
    },
    {
      path: '/deliciousFood/:type/:index',
      component: deliciousFood
    },
    {
      path: '/guessLikeDetails/:index',
      component: guessLikeDetails,
      name:'guessLikeDetails'
    //   beforeEnter: (to, from, next) => {
    //     console.log("to", to);
    //     console.log("from", from);
    //     console.log("next", next);
    //   }
    },
    //如果没有这个redirect，页面会先出来一个只有a标签的空白页面，点击a标签会出现新的页面，里面的内容是home页面
    {
      path: '/',
      redirect: '/home'
    },
  ],
  linkActiveClass: 'active'
})
