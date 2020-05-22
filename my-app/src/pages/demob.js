import React from 'react';
import {connect} from 'react-redux';

class Demob extends React.Component{
    render(){
        console.log('demob',this.props);
        return <div className="result">{this.props.count}</div>
    }
}

const mapStateToProps = state => {
    console.log('demob',state);
    return state;
}

export default connect(mapStateToProps)(Demob);