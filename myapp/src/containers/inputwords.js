import React from 'react'
import {Button} from 'antd-mobile';
import emitter from './ev'



class InputWords extends React.Component{

    constructor(props){
        super(props)
        this.state={
            words:'hello world',
            inputValue:''
        }
    }

    render(){
        const inputcss = {
            inputwords:{position:'fixed',left:0,bottom:0,width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'36px',
        background:'#fff',zIndex:100,boxShadow:'0 2px 3px #ccc'},
            words:{width:'73%',height:'26px',marginLeft:'1%',borderRadius:'5px',border:'1px solid #108ee9',textIndent:'5px'},
            send:{width:'24%',margin:'0 1%'}
        }
        return(
            <div className="inputwords" style={inputcss.inputwords}>
                <input type="text" placeholder="" className="words" style={inputcss.words} value={this.state.inputValue} onChange={this.getValue} 
                onKeyUp={this.sendcontent} />
                <Button onClick={this.sendmsg(this.state.inputValue)} type="primary" size="small" className="send" style={inputcss.send}>发送</Button>
            </div>
        )
    }
    sendcontent=(event)=>{
        if(this.state.inputValue!==''){
            if(event.keyCode==13){
                    
                emitter.emit('callmsg',this.state.inputValue);
                this.setState({inputValue:''})

            }
        }

    }

    sendmsg=(msg)=>{
        if(this.state.inputValue!==''){
            return ()=>{
                emitter.emit('callmsg',msg);
                this.setState({inputValue:''})
            }
        }
        
    }
    getValue=(event)=>{
        this.setState({
            inputValue : event.target.value
        })
    }


}



export default InputWords