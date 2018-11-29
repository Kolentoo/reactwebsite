import React from 'react'
import Menu from './menu'
import InputWords from './inputwords'
import Records from './records'

class Chat extends React.Component{
    render(){
        // const chatcss = {

        // }
        return(
            <div className="chat">
                <Menu />
                <Records />
                <InputWords />
            </div>
        )
    }
}

export default Chat