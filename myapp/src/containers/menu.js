import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <div>
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >Kolento</NavBar>
                </div>
            </div>
        )
    }
}

export default Menu



