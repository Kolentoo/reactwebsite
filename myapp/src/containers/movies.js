import React from 'react'

class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            moviesList:[]
        }
    }
    componentDidMount(){
        fetch('https://xkolento.cn/chart/top_love',{
            method:'get'
        }).then((res)=>{
            res.json().then(data=>{
                this.setState({
                    moviesList:data
                })
                console.log(this.state.moviesList)
            })
        })

    }
    render(){
        const moviecss = {
            common:{color:'#fff',fontSize:'40px',padding:'20px',textAlign:'center',display:'flex',justifyContent:'left'},
            h2:{fontSize:'50px',color:'#fff',margin:'100px 0 50px 0'},
            list:{margin:'30px 10px 0'},
            img:{height:'600px'}
        }
        return(
            <div className="moviesbox">
                {/* <h2 className="tc" style={moviecss.h2}>Movies</h2> */}
                <div className="movies clearfix" style={moviecss.common}>
                    {
                        this.state.moviesList.map((current,idx,arr)=>{
                            return (
                                <li className="fl" style={moviecss.list} key={idx}>
                                    <img className="pic" style={moviecss.img} src={current.cover_url} alt=""/>
                                    <p className="name">{current.title}</p>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Movies