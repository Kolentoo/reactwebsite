import React from 'react'
import {withRouter} from 'react-router-dom'

class Nav extends React.Component{
    go=()=>{
        console.log(this.props)
        this.props.history.push("/chat")
    }
    render(){
        return(
            <div className="nav">
                <p className="p1" onClick={this.go}>go nav</p>
            </div>
        )
    }
}

export default withRouter(Nav)

