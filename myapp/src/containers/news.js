import React from 'react'
// import ReactDOM from 'react-dom'
import bj3 from '../images/bj1.jpg'

class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:['hello kolento','test coding'],
            words:''
        }
    }
    render(){
        const newsCss={
            newsbox:{color:'#fff',fontSize:'3rem',background:'url('+bj3+') no-repeat',backgroundSize:'cover',
            backgroundAttachment: 'fixed',padding:'10rem 0 0 0'},
            something:{border:'0.1rem solid #fff',borderRadius:'0.8rem',height:'5rem',lineHeight:'5rem',textIndent:'2rem',width:'60%',margin:'0 auto 5rem',
            fontSize:'3.2rem'}
        }
        return(
            <div className="news tc" style={newsCss.newsbox} id="news">
                <h2>Todo List</h2>
                <input type="text" className="something" style={newsCss.something} onKeyDown={this.addItem} value={this.state.words} onChange={this.change}/>
                <ul className="newscon">
                    {
                        this.state.item.map((current,index,arr)=>{
                            return(
                                <li className="newslist" key={index}>
                                    <p className="p1">{index+1}. {current} <em className="pointer" onClick={e=>this.del(index)}>删除</em></p>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
    change=(e)=>{
        this.setState({words:e.target.value})
    }
    addItem=(e)=>{
        if(e.keyCode===13){
            let newItem = this.state.item.push(e.target.value)
            this.setState({item:this.state.item})
            this.setState({words:''})
            
            console.log(this.state.item)
        }
    }
    del=(now)=>{
        this.state.item.splice(now,1)
        let otherItem = this.state.item
        this.setState({item:otherItem})
        console.log(this.state.item)
        // let otherItem = []
        // this.state.item.map((current,idx,arr)=>{
        //     if(now!==current){
        //         otherItem.push(current)
        //     }
        // })
        // this.setState({item:otherItem})
        // console.log(otherItem)
    }
    componentDidMount(){
        document.getElementById('news').style.height='100vh'
    }
}

export default News