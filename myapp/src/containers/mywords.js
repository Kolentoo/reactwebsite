import React from 'react'
import myhead from '../images/me.png'

class Mywords extends React.Component{
    render(){
        const recordcss = {
            recordlist:{margin:'10px 0 0 0'},
            head:{width:'34px',height:'34px',borderRadius:'50%',boxShadow:'0 2px 3px #ccc'},
            words:{background:'rgba(255,255,255,0.8)',color:'#333',fontSize:'16px',margin:'4px 10px 0',padding:'5px 10px',lineHeight:'18px',borderRadius:'10px',
            boxShadow:'0 2px 3px #ccc'}
        }
        return(
            <li className="recordlist clearfix me" style={recordcss.recordlist}>
                <img style={recordcss.head} className="vm fr" src={myhead} alt=""/>
                <p className="words fr" style={recordcss.words}>{this.props.content}</p>
            </li>
        )
    }
}

export default Mywords