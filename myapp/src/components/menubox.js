import React from 'react'
// import ReactDOM from 'react-dom'
import {Switch,Link,Route,BrowserRouter} from 'react-router-dom'

import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'

var menuGroup = [
    {menupic:pic1,menuname:'weather'},
    {menupic:pic2,menuname:'news'},
    {menupic:pic3,menuname:'video'},
    {menupic:pic4,menuname:'books'},
    {menupic:pic5,menuname:'others'},
    {menupic:pic6,menuname:'myself'},
]

class Menubox extends React.Component{
    render(){
        const menuCss={
            menu:{margin:'0 5rem',color:'#fff'},
            p1:{fontSize:'8rem',textAlign:'center',width:'100%',letterSpacing:'2rem'},
            link:{color:'#fff',display:'block'}
        }
    

        return(
            <ul className="menu" style={menuCss.menu}>
                {menuGroup.map((current,index,arr)=>{
                    return (
                        
                        <li className={`menulist${index} menulist`} style={{background:`url(${current.menupic}) no-repeat center center`,height:'55rem',marginBottom:'4rem',
                        display:'flex',justifyContentL:'center',alignItems:'center',justifyContent:'center'}} key={index}>

                            <Link to={`/${current.menuname}`} style={menuCss.link}>
                                <p className="p1" style={menuCss.p1}>{current.menuname}</p>
                            </Link>
                        </li>
                        
                    )
                })}

            </ul>
        )

    }
}

export default Menubox