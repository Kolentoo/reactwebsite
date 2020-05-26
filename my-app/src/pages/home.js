import React from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom';
import Detail from '../pages/detail/detail'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={}
        // this.state=this.props
        // console.log(props)
    }
    goback =()=>{
        this.props.history.push('/')
    }
    render(){
        console.log('home')
        return(
            <div className="home" onClick={this.goback}>

                home page.............

                {
                    // this.props.route.map((item,index)=>{
                    //     console.log(item.path)
                    //     return <Route key={index} path={item.path} component={item.component} />
                    // })
                }
            </div>

        )
    }
    componentDidMount(){
        console.log('ppppp',this.props)
    }
}

export default Home;
