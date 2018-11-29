import React from 'react'
import Yourwords from './yourwords'
import Mywords from './mywords'
import emitter from './ev'



class Records extends React.Component{
    constructor(props){
        super(props);
        this.state={
            originmsg:'hi kolento ~',
            msggroup:[
                {who:'you',msg:'hello'},
                {who:'me',msg:'world'}
            ],
            msggroup1:['hi kolento ~'],
            msggroup2:['qianduan ceshi'],
            msg:''
        }
    }
    componentDidMount(){
        let self = this
        this.eventEmitter = emitter.addListener("callmsg",(msg)=>{
            self.setState({
                msggroup:self.state.msggroup.push(
                    {who:'me',msg:msg}
                )
            })

        });
    }
    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }
    render(){
        const recordcss = {
            records:{padding:'0 10px',height:'88vh',overflowY:'scroll'}
        }
        return(
            <div className="records" style={recordcss.records}>
                <ul className="recordcon">
                    {
                        this.state.msggroup.map((current,idx,arr)=>{
                            if(current.who==='you'){
                                return <Yourwords content={current.msg} callback={this.parents} key={idx} />
                            }else{
                                return <Mywords content={current.msg}  key={idx} />
                            }
                        })
                    }

                </ul>
            </div>
        )
    }
    parents=(msg)=>{
        console.log(msg)
    }
}

export default Records