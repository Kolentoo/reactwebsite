import React from 'react';
import { PageHeader } from 'antd';

class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showTop:false,
      topMovie:[]
    }
  }
  componentWillMount(){
    this.getDetail();
    // this.getTopMovie();
  }
  componentWillUnmount(){
    // 防止警告报错 组件卸载前处理
    this.setState = (state,callback)=>{
      return;
    };
  }
  getDetail=()=>{
    // 需要后台做转发接口代理才能跨域访问部分接口
    fetch('https://douban.uieee.com/v2/movie/subject/26942674?apikey=0df993c66c0c636e29ecbb5344252a4a',{

    }).then((response)=> {
      return response.json();
    }).then((res)=> {
      console.log(res);
    });
  }
  getTopMovie=()=>{
    // fetch解析返回的也是一个promise对象，所以需要两个then才能得到我们需要的json数据
    let topData = localStorage.getItem('top250');
    if(topData){
      this.setState({
        showTop:true,
        topMovie:JSON.parse(topData)
      })
    }else{
      // 此处fetch预检跨域所以会存在调用2次接口请求的问题
      fetch('https://douban.uieee.com/v2/movie/top250').then((response)=> {
        return response.json();
      }).then((res)=> {
        console.log(res);
        this.setState({
          showTop:true,
          topMovie:res
        })
        let topRes = JSON.stringify(res);
        localStorage.setItem('top250',topRes)
      });
    }


  }

  render(){

    return(
      <div className="movie">
        <PageHeader
          className="site-page-header"
          title="豆瓣Top 250"
          subTitle=""
        />
        <ul className="movie-top clearfix">
          
          {
            
            this.state.showTop?this.state.topMovie.subjects.map((current,index,arr)=>{
              let star = [];
              for(let i=0;i<parseInt(current.rating.average/2)+1;i++){
                star.push(1)             
              }
              return (
                <li className="movie-list fl" key={index}>
                  <div className="chart"><img className="vm g10" src={current.images.small} alt=""/></div>
                  <div className="score-box">
                    <div className="star">
                      {
                        star.map((cur,idx)=>{
                          return <span key={idx}>★</span>
                        })
                      }
                    </div>
                    <div className="socre">{current.rating.average}</div>
                  </div>
                  <p className="name">{current.title}</p>
                </li>
              )
            }):''
            
          }
          
        </ul>
      </div>
    )
  }
}

export default Movie;