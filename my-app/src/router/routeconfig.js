import App from '../App';
import Login from '../pages/login';
import Home from '../pages/home';
import Detail from '../pages/detail/detail';
import Demoa from '../pages/demoa'
import Demob from '../pages/demob'
import Children from '../pages/parent/children';
import Parent from '../pages/parent/parent';

import Movie from '../pages/movie/movie'


console.log('Login',Login)
let routerconfig = [
    {
        path: '/movie',
        component:Movie ,
        name:"电影",
        exact:true,
    },
    {
        path: '/parent',
        component:Parent ,
        name:"父子组件传值",
        exact:true,
    },
    {
        path: '/demob',
        component:Demob ,
        name:"案例demob",
        exact:true,
    },
    {
        path: '/demoa',
        component:Demoa ,
        name:"案例demoa",
        exact:true,
    },
    {
        path: '/home',
        component:Home ,
        name:"首页",
        exact:true,
        children: [
            { path: "/home/detail", component: Detail, exact:true },
            { path: "/home/demoa", component: Demoa, exact:true },
        ]
    },
    {
        path: '/',
        component:Login ,
        name:"登录",
        exact:true
    },
];
export default routerconfig;
  

  
