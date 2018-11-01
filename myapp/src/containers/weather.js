import React from 'react'
// import ReactDOM from 'react-dom'
import bj2 from '../images/bj1.jpg'


class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state={
                weatherinfo:{
                forecast:[]
            },
            searchwords:'上海'
        }
    }
    componentDidMount(){
        document.getElementById('weather').style.height='100vh'
        this.checkWeather();


    }
    render(){
        const weatherCss = {
            weatherbox:{color:'#fff',fontSize:'4rem',background:'url('+bj2+') no-repeat',backgroundSize:'cover',
            backgroundAttachment: 'fixed',paddingTop:'10rem'},
            input:{background:'none',border:'0.1rem solid #fff',height:'5rem',width:'70%',margin:'3rem auto',textIndent:'3rem',lineHeight:'5rem',color:'#fff',
        fontSize:'3.2rem',borderRadius:'1rem'},
            infocon:{display:'flex',justifyContent:'center',margin:'3rem 0'},
            infolist:{color:'#fff',fontSize:'3.2rem',padding:'0 1%',width:'30%'},
            search:{color:'#fff',fontSize:'3.2rem'},
            tips:{fontSize:'2.8rem',margin:'2rem 4rem 0'}

        }
        return(
            <div id="weather" className="Weather" style={weatherCss.weatherbox}>
                <h2 className="tc">Weather</h2>
                <input className="block" type="text" placeholder="请输入城市" style={weatherCss.input} onChange={this.inputValue} value={this.state.searchwords} 
                onKeyDown={this.keydown}/>
                <p className="search tc" onClick={this.search} style={weatherCss.search}>Search</p>
                <div className="info">
                    <p className="city tc">{this.state.weatherinfo.city}</p>
                    <ul className="infocon" style={weatherCss.infocon}>
                        {
                            this.state.weatherinfo.forecast.map((current,index,arr)=>{
                                return (
                                    <li className="infolist tc" style={weatherCss.infolist} key={index}>
                                        <p className="time">{current.date}</p>
                                        <p className="high">{current.high}</p>
                                        <p className="low">{current.low}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <p className="tips" style={weatherCss.tips}>{this.state.weatherinfo.ganmao}</p>
                </div>
            </div>
        )
    }
    search=()=>{
        console.log(this.state.searchwords)
        this.checkWeather();
    }
    inputValue=(e)=>{
        this.setState({
            searchwords:e.target.value
        })
        // console.log(this.state.searchwords)
        // console.log(e.target.value)
    }
    checkWeather=()=>{

        fetch(`https://www.apiopen.top/weatherApi?city=${this.state.searchwords}`,{
            method:'get'
        }).then(res=>{
            res.json().then(data=>{
                this.setState({weatherinfo:data.data})
                console.log(this)
            })
        })
    }
    keydown=(e)=>{
        console.log()
        if(e.keyCode===13){
            this.search();
        }
    }

}

export default Weather