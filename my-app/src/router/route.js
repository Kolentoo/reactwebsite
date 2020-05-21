import React,{Component} from 'react';
import { Route,Switch, HashRouter } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';

class RouterMap extends Component {
    constructor(props, context){
        super(props, context);
    }
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={Login} exact/>
                    <Route path='/home' component={Home}/>
                </Switch>        
            </HashRouter>
        )
    }
}

export default RouterMap