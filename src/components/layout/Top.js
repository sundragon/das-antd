import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Top.css'
import { Link, withRouter} from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class Top extends Component {

    constructor({ props }) {
        super(props);
    }
    
    render() {
        const { location } = this.props;
        let locArr = location.pathname.split('/');
        const key = locArr.length > 2 ? locArr[1] : 'kt';        
        return (
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['kt']}
                    selectedKeys={[key]}
                    style={{ lineHeight: '64px', textAlign: 'left' }}
                >
                    <Menu.Item key="kt" ><Link to="/kt/certification"><span>KT</span></Link></Menu.Item>
                    <Menu.Item key="sk"><Link to="/sk/certification"><span>SK</span></Link></Menu.Item>
                    <Menu.Item key="lg"><Link to="/lg/certification"><span>LG</span></Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default withRouter(Top);