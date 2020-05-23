import React from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom'
import routeconfig from './routeconfig'
// import { renderRoutes } from 'react-router-config';
//上面三个必不可少的,你可以对照一开始打建的项目路由引入作比较
//这个文件就是路由分离的文件


/*
HashRouter
1.用这个了就代表路径加上/#/
2.换成BrowserRouter了；路径就不需要加/#/
3.用HashRouter了就要把path的路径名字带上，如果首次加载默认的话要这样写： <Route exact path="/"  component={App}/>

*/

// const BasicRoute = () => (
//     <HashRouter >
//         {console.log(renderRoutes)}
//         {renderRoutes(routeconfig)} 
//     </HashRouter>
// );
// export default BasicRoute;

class RouteBox extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    {   
                        routeconfig.map((item,index)=>{
                            if(item.path=='Login'){
                                localStorage.setItem('authority','off');
                            }else{
                                localStorage.setItem('authority','on');
                            }
                            return item.component?<Route key={index} path={item.path} component={item.component} >
                                {/* {
                                    (props)=>{return <item.component route={item.children}/> }
                                } */}
                            </Route>:''
                        })
                    }
                </Switch>
            </HashRouter>
        )
    }

}

export default RouteBox;

