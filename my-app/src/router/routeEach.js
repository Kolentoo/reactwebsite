import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

//通过生命周期钩子进行导航守卫
class LifeCycleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        
    }
    componentWillMount(){
        localStorage.setItem('currentBread',this.props.Item.name);
        this.props.markBread();
        if(this.props.Item.path==='/'){
            this.props.closeSideBar();
        }else{
            this.props.openSideBar();
        }
        this.setState({})
        console.log(this.props,'路由守卫');
    }
    render(){
        const {history,Item} = this.props;
        return(
            // 传入history来获取history对象
            <Item.component path={Item.path} history={history} name={Item.name}/>
        )
    }
    
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openSideBar: () => {
            dispatch({
                type:"showLayout"
            })
        },
        closeSideBar: () => {
            dispatch({ 
                type:"hideLayout"
            })
        },
        markBread:(value)=>{
            dispatch({ 
                type:"currentBread"
            })
        }
    }
  }

export default connect(null,mapDispatchToProps)(withRouter(LifeCycleComponent));