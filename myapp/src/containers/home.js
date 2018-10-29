import React from 'react'
// import ReactDOM from 'react-dom';
import bj from '../images/bj1.jpg'

import Menubox from '../components/menubox'



class Home extends React.Component{
    render(){
        const styleCss = {
            kolento:{background:'url('+bj+') no-repeat',backgroundSize:'cover',backgroundAttachment: 'fixed'},
            title:{padding:'5rem 4rem'},
            h1:{color:'#fff',fontSize:'4rem'},
            p1:{color: '#4f4f4f',fontSize:'2.6rem'},
            p2:{color:'#fff',fontSize:'2.6rem',marginTop:'3.5rem'},
            navlist:{color:'#fff',fontSize:'3rem'}

        }

        return(
            <div id="kolento" className="kolento" style={styleCss.kolento}>
                <div className="title" style={styleCss.title}>
                    <h1 style={styleCss.h1}>KOLENTO</h1>
                    <p style={styleCss.p1} className="p1">Closer To Milk Three Brothers</p>
                    <p style={styleCss.p2} className="p2">About & contact</p>
                </div>
                <Menubox />
            </div>
        )
    }

    componentDidMount(){
        // let wheight = window.innerHeight/10;
        document.getElementById('kolento').style.height='100vh'
    }
}

export default Home;