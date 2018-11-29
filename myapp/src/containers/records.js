import React from 'react'
import Yourwords from './yourwords'
import Mywords from './mywords'
import emitter from './ev'
import { Toast } from 'antd-mobile';



class Records extends React.Component{
    constructor(props){
        super(props);
        this.state={
            originmsg:'hi kolento ~',
            msggroup:[
                {who:'you',msg:'hello ~ '}
            ],
            msggroup1:['hi kolento ~'],
            msggroup2:['qianduan ceshi'],
            msg:''
        }
    }
    componentDidMount(){


        let self = this
        this.eventEmitter = emitter.addListener("callmsg",(msg)=>{
            this.setState(prevState => ({

                msggroup:[...this.state.msggroup,{who:'me',msg:msg}]
          
            }))
            if(msg==''){

                this.showToast('请输入内容')
            }else{

            
                fetch(`http://www.xkolento.cn/robots2/${msg}`,{
                    method:'get'
                }).then(res=>{
                    res.json().then(data=>{

                        this.setState(prevState => ({

                            msggroup:[...this.state.msggroup,{who:'you',msg:data}]
                    
                        }))
                        let records = document.getElementById('records');
                        setTimeout(() => {
                            records.scrollTo(0, 10000)
                            console.log('scroll')
                        }, 300);
                        

                    })
                }).catch(res=>{
                    this.setState(prevState => ({

                        msggroup:[...this.state.msggroup,{who:'you',msg:'一脸懵0 0 '}]
                
                    }))
                })

            }

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
            <div className="records" style={recordcss.records} id="records">
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
    showToast=(message)=> {
        Toast.info(message, 1);
    }
    parents=(msg)=>{
        console.log(msg)
    }
}

export default Records