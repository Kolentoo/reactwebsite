import React from 'react'
import Home from './home'
import Weather from './weather'
import News from './news'
import {Switch,Link,Route,BrowserRouter} from 'react-router-dom'

class All extends React.Component{
    render(){
        // const {

        // }
        return(
            
            <BrowserRouter>
                <div className="all" id="all">
                    <Switch>
                        
                        
                        <Route path='/weather' component={Weather}/>
                        <Route path='/news' component={News}/>
                        <Route path='/' component={Home}/>
                        
                    </Switch>
                </div>
            </BrowserRouter>
            
            
        )
    }
    
    componentDidMount(){
        document.getElementById('all').style.height='100vh'
    }
}

export default All