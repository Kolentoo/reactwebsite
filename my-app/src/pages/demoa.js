import React from 'react';
import {connect} from 'react-redux';

class demoA extends React.Component{
  handleClick = () =>{
    console.log('demoa',this.props);
    this.props.sendAction();
    this.setState({})//使得react页面视图发生变化
  }
  reduceValue = () =>{
    console.log('demoa',this.props);
    this.props.changeAction();
    this.setState({})//使得react页面视图发生变化
  }
  goDemob = ()=>{
    this.props.history.push('/demob')
  }
  render(){
    return (
      <div className="test">
        <button onClick={this.handleClick}> add </button>
        <button onClick={this.reduceValue}> 减少 </button>
        <button onClick={this.goDemob}>跳转到demob</button>
      </div>
    )
  }
}

// 这个函数要有一个返回值，返回值是一个对象
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      sendAction: () => {
          dispatch({
              type:"add_action"
          })
      },
      changeAction: () => {
        dispatch({
            type:"reduce_action"
        })
    }
  }
}
export default connect(null,mapDispatchToProps)(demoA);