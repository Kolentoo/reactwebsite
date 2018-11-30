import React from 'react'
import Home from './home'
import Weather from './weather'
import News from './news'
import Movies from './movies'
import Login from './login'
import BasicInputExampleWrapper from './login'
import Chat from './chat'
import Myself from './myself'
import Test from './test'


import {Link,Route,BrowserRouter,Switch} from 'react-router-dom'



class All extends React.Component{
    
    render(){
        return(
            <div className="kolento">

                <BrowserRouter>
                    <div className="content">
                        <Switch>
                            {/* <Route path='/' component={Test}/> */}
                            <Route path="/login" component={BasicInputExampleWrapper} />
                            <Route path='/chat' component={Chat}/>
                            <Route path='/myself' component={Myself}/>
                        </Switch> 
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default All

// class All extends React.Component{
//     render(){
//         // const {

//         // }
//         return(
            
//             <BrowserRouter>
//                 <div className="all" id="all">
//                     <Switch>
                        
                        
//                         <Route path='/weather' component={Weather}/>
//                         <Route path='/news' component={News}/>
//                         <Route path='/movies' component={Movies}/>
//                         <Route path='/' component={Home}/>
                        
//                     </Switch>
//                 </div>
//             </BrowserRouter>
            
            
//         )
//     }
//     componentDidMount(){
//         document.getElementById('all').style.height='100vh'
//     }
// }


// export default All