import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/sell/home/home'
import pic from '../components/pic/pic'
import listPic from '../components/pic/listPic'
import headers from '../components/headers/headers'
import list from '../components/list/list'
import split from '../components/split/split'
import tabbars from '../components/tabbars/tabbars'
import listDetail from '../components/list/listDetail'
import tops from '../page/sell/tops/tops'
import regist from '../page/sell/regist/regist'
import login from '../page/sell/login/login'
import goods from '../page/sell/goods/goods'
import shopcart from '../page/sell/shopcart/shopcart'
import jie from '../page/sell/jie/jie'
import complete from '../page/sell/complete/complete'
import special from '../page/sell/special/special'
import address from '../page/sell/address/address'
import man from '../page/sell/man/man'
import mains from '../page/mains/mains'
import operate from '../page/buy/operate/operate'
import look from '../page/sell/look/look'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    'mode': 'history',
    routes: [{
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/pic',
            name: 'pic',
            component: pic
        },
        {
            path: '/headers',
            name: 'headers',
            component: headers
        },
        {
            path: '/list',
            name: 'list',
            component: list
        }, {
            path: '/split',
            name: 'split',
            component: split
        },
        {
            path: '/listDetail',
            name: 'listDetail',
            component: listDetail
        },
        {
            path: '/tops',
            name: 'tops',
            component: tops
        },
        {
            path: '/listPic',
            name: 'listPic',
            component: listPic
        },
        {
            path: '/regist',
            name: 'regist',
            component: regist
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods
        },
        {
            path: '/tabbars',
            name: 'tabbars',
            component: tabbars
        },
        {
            path: '/shopcart',
            name: 'shopcart',
            component: shopcart
        },
        {
            path: '/jie',
            name: 'jie',
            component: jie
        },
        {
            path: '/complete',
            name: 'complete',
            component: complete
        },
        {
            path: '/special',
            name: 'special',
            component: special
        },
        {
            path: '/address',
            name: 'address',
            component: address
        },
        {
            path: '/man',
            name: 'man',
            component: man
        },
        {
            path: '/',
            name: 'mains',
            component: mains
        },
        {
            path: '/operate',
            name: 'operate',
            component: operate
        },
        {
            path: '/look',
            name: 'look',
            component: look
        }
    ]
})