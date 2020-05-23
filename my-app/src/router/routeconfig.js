import App from '../App';
import Login from '../pages/login';
import Home from '../pages/home';
import Detail from '../pages/detail/detail';
import Demoa from '../pages/demoa'
import Demob from '../pages/demob'


console.log('Login',Login)
let routerconfig = [
    {
        path: '/demob',
        component:Demob ,
        name:"demob",
        exact:true,
    },
    {
        path: '/home',
        component:Home ,
        name:"home",
        exact:true,
        children: [
            { path: "/home/detail", component: Detail, exact:true },
            { path: "/home/demoa", component: Demoa, exact:true },
        ]
    },
    {
        path: '/',
        component:Login ,
        name:"login",
        exact:true
    },
];
export default routerconfig;
  

  
