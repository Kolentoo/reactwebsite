import React from 'react';
import api from '../../axios/axios';

class Movie extends React.Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.getTopMovie()
  }
  getTopMovie=()=>{
    // fetch解析返回的也是一个promise对象，所以需要两个then才能得到我们需要的json数据
    fetch('https://douban.uieee.com/v2/movie/top250').then(function(response) {
      return response.json();
    }).then(function(res) {
      console.log(res);
    });

  }

  render(){
    return(
      <div className="movie">
        
      </div>
    )
  }
}

export default Movie;