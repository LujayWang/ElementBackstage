import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Login from '../views/Login'
import Main from '../views/Main'
import Order from '../components/Order'
import Home from '../components/Home'
import Goods from '../components/Goods'
import Evaluate from '../components/Evaluate'
import OrderList from '../components/OrderList'
import EvaluateList from '../components/EvaluateList'
import GoodsList from '../components/GoodsList'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: App,
        children: [{
                path: '',
                component: Login
            },
            {
                path: 'main',
                component: Main,
                children: [{
                        path: '',
                        component: Home
                    },
                    {
                        path: 'order',
                        component: Order,
                        children:[{
                            path:':order',
                            component:OrderList
                        }]
                    },
                    {
                        path: 'goods',
                        component: Goods,
                        children:[{
                            path:':goods',
                            component:GoodsList
                        }]
                    },
                    {
                        path: 'evaluate',
                        component: Evaluate,
                        children: [{
                            path: ':evaluate',
                            component: EvaluateList,
                        }]
                    }
                ]
            }
        ]
    }]
})
