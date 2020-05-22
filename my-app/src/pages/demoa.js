import React from 'react';
import {connect} from 'react-redux';

class demoA extends React.Component{
  handleClick = () =>{
    console.log('demoa',this.props);
    this.props.sendAction();
    this.setState({})//使得react页面视图发生变化
  }
  render(){
    return <button onClick={this.handleClick}> add </button>
  }
}

// 这个函数要有一个返回值，返回值是一个对象
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      sendAction: () => {
          dispatch({
              type:"add_action"
          })
      }
  }
}
export default connect(null,mapDispatchToProps)(demoA);