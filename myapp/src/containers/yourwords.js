import React from 'react'
import yourhead from '../images/you.jpg'

class Yourwords extends React.Component{
    
    render(){
        const recordcss = {
            recordlist:{margin:'10px 0 0 0'},
            head:{width:'34px',height:'34px',borderRadius:'50%',boxShadow:'0 2px 3px #ccc'},
            words:{background:'rgba(255,255,255,0.8)',color:'#333',fontSize:'14px',margin:'4px 10px 0',padding:'5px 10px',lineHeight:'18px',borderRadius:'10px',
            boxShadow:'0 2px 3px #ccc'}
        }
        return(
            <li className="recordlist clearfix you" style={recordcss.recordlist} onClick={this.test('子传父~~~~')}>
                <img style={recordcss.head} className="vm fl" src={yourhead} alt=""/>
                <p className="words fl" style={recordcss.words}>{this.props.content}</p>
            </li>
        )
    }
    test=(msg)=>{
        return ()=>{
            this.props.callback(msg)
        }
        
    }
}

export default Yourwords