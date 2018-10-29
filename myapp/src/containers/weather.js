import React from 'react'
// import ReactDOM from 'react-dom'
import bj2 from '../images/bj1.jpg'


class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state={weatherinfo:''}
    }
    componentDidMount(){
        document.getElementById('weather').style.height='100vh'


        fetch('https://www.apiopen.top/weatherApi?city=北京',{
            method:'get'
        }).then(res=>{
            res.json().then(data=>{
                this.setState({weatherinfo:data.data})
                console.log(this)
            })
        })

    }
    render(){
        const weatherCss = {
            weatherbox:{color:'#fff',fontSize:'4rem',background:'url('+bj2+') no-repeat',backgroundSize:'cover',
            backgroundAttachment: 'fixed',paddingTop:'10rem'},
            input:{background:'none',border:'0.1rem solid #fff',height:'5rem',width:'70%',margin:'3rem auto',textIndent:'3rem',lineHeight:'5rem',color:'#fff',
        fontSize:'3.2rem',borderRadius:'1rem'},
            infocon:{display:'flex',justifyContent:'center'},
            tips:{fontSize:'2.8rem',margin:'2rem 4rem 0'}

        }
        return(
            <div id="weather" className="Weather" style={weatherCss.weatherbox}>
                <h2 className="tc">Weather</h2>
                <input className="block" type="text" placeholder="请输入城市" style={weatherCss.input} />
                <div className="info">
                    <p className="city tc">{this.state.weatherinfo.city}</p>
                    <ul className="infocon" style={weatherCss.infocon}>
                    {console.log(this.state.weatherinfo)}
                        {/* {
                            this.state.weatherinfo.forecast.map((current,index,arr)=>{
                                return (
                                    <li className="infolist" style={{color:'#fff',fontSize:'3.2rem'}}>
                                        <p className="time">{current.data}</p>
                                        <p className="high">{current.high}</p>
                                        <p className="low">{current.low}</p>
                                    </li>
                                )
                            })
                        } */}
                    </ul>
                    <p className="tips" style={weatherCss.tips}>{this.state.weatherinfo.ganmao}</p>
                </div>
            </div>
        )
    }


}

export default Weather