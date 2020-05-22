import App from '../App';
import Login from '../pages/login';
import Home from '../pages/home';
import Detail from '../pages/detail/detail';


  const routes = [
    {
        path: '/',
        component:Login ,
        name:"login",
        exact:true
    },
    {
        path: '/home',
        component:Home ,
        name:"home",
        exact:true,
        // children: [
        //     { path: "/home/detail", component: Detail, exact:true },
        // ]
    },
    {
        path: '/home/detail',
        component:Detail ,
        name:"home",
        exact:true,
    }
];
export {routes}
  

  
