import React from 'react'
// import ReactDOM from 'react-dom'

class News extends React.Component{
    render(){
        const newsCss={
            newsbox:{color:'#fff',fontSize:'3rem'}
        }
        return(
            <div className="news" style={newsCss.newsbox}>
                <h2>news title</h2>
                <ul className="newscon">
                    <li className="newslist">news content</li>
                </ul>
            </div>
        )
    }
}

export default News