import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
//  createWebHistory: 路径中间无加:"/#"
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 为了打包的时候使用分包, 节省资源, 可以使路由懒加载:
//  /* webpackChunkName: 'home' */ 打包后可以使包名有指定名称
// const Home = () => import(/* webpackChunkName: 'home' */"../views/Home.vue")
// const About = () => import("../views/About.vue")

// 研发中一般使用以下方式引入懒加载:

const router = createRouter({
    // 需要指定采用的模式: hash
    history: createWebHashHistory(),

    // 映射关系
    routes: [
        // redirect: 默认重定向,自动跳转至home
        {
            // name属性: 路由名称
            // meta属性: 自定义属性
        name: "defalut",
        path: '/',
        redirect: "/home"
        },
        {
            // name是唯一, 如果重复会覆盖前一个
        name: "home", 
        path: '/home',
        component: () => import("../views/Home.vue"),
        // 二级路由
        children: [
             {
                path: "/home",
                redirect: "/home/recommend"

            },
            {
                path: '/home/recommend',
                component: () => import("../views/HomeRecommend.vue")
            },  
            {
                path: '/home/ranking',
                component: () => import("../views/HomeRanking.vue")
            },
        ]
    },
        {
        path: '/about',
        component: () => import("../views/About.vue")
        },
        {
            // 定义可传入的参数
        path: '/user/:id',
        component: () => import("../views/User.vue")
        },
        {
            path: "/order",
            component: () => import("../views/Order.vue")
        },
        ,
        {
            path: "/login",
            component: () => import("../views/login.vue")
        },
        {
            // /:pathMatch(.*): 匹配除以上配置的路径之外的任何配置,
            // 如果出现以上配置之外的任何配置, 就使用当前路径
            // /:pathMatch(.*)* : 表示把路径解析成数组
            path:'/:pathMatch(.*)',
            // path:'/:pathMatch(.*)'*,
            component: () => import("../views/NotFound.vue")
        }
    ]
})

// 动态添加路由:
// router.addRouter("绑定的父级路由", {
// })
let isAdmin = true
if(isAdmin) {
    router.addRoute({
        path: "/admin",
        component: () => import("../views/Admin.vue")
    }),
    router.addRoute("home",{
        path: "vip",
        component:() => import("../views/HomeVip.vue")
    })
} 

// 路由导航守卫
// 进行任何的路由跳转之前, 传入的beforeEach中的函数都会被回调
// 会拦截任何跳转然后强制跳转至beforeEach中定义的路由
// router.beforeEach((to, from) => {
//     if(to.path != "/login") {
//         return "/login"
//     }
// })

// 需求: 进入订单(order)页面时, 判断用户是否等(isLogin -> localStorage保存token)
// 情况一: 用户没有登录, 那么跳转到登录页面
// 情况二: 用户已登录, 那么直接进入到订单页面
router.beforeEach((to, from) => {
    const token = localStorage.getItem("token")
    if(  to.path === "/order" && !token  ) {
        return "/login"
    }
})

export default router