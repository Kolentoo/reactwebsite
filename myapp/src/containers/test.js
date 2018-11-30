import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos: [{
              text: 'Eat food',
              completed: true
            }, {
              text: 'Exercise',
              completed: false
            }],
            visibilityFilter: 'SHOW_COMPLETED'
        }
    }
    render(){
        return(
            <div className="test">

                <p className="p1">test</p>
            </div>
        )
    }
}

export default Test;