import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        // this.state=this.props
        console.log(props)
    }
    render(){
        return(
            <div className="home">home</div>

        )
    }
}

export default Home;
