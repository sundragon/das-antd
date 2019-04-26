import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './Left.css';
import { Layout, Menu, Icon } from 'antd';
import Main from './Main';

// const { SubMenu } = Menu;
const { Sider } = Layout;


class Left extends Component {

    constructor({ props }) {
        super(props);
    }

    render() {

        const { location } = this.props;
        let locArr = location.pathname.split('/');
        const key = locArr.length > 2  ? `/${locArr[2]}` : '/certification';
        const certification = `/${locArr[1]}/certification`
        const detection = `/${locArr[1]}/detection`
        const notice = `/${locArr[1]}/notice`
        const subscribers = `/${locArr[1]}/subscribers`
        return (
            <Layout className="inherit-height">
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['/certification']}
                        selectedKeys={[key]}
                        style={{ height: '100%', borderRight: 0, marginTop: '-4px' }}
                    >
                        <Menu.Item key="/certification">
                            <Link to={certification}>
                                <Icon type="file" /><span>인증율 추이</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/detection">
                            <Link to={detection}>
                                <Icon type="file" /><span>검출율 추이</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/notice">
                            <Link to={notice}>
                                <Icon type="file" /><span>공지 수신율 추이</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/subscribers">
                            <Link to={subscribers}>
                                <Icon type="file" /><span>가입율 추이</span>
                            </Link>
                        </Menu.Item>
                        {/* <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="2">Tom</Menu.Item>
                            <Menu.Item key="3">Bill</Menu.Item>
                            <Menu.Item key="4">Alex</Menu.Item>
                        </SubMenu> 
                        <Menu.Item key="5">
                            <Icon type="pie-chart" /><span>chart</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="desktop" /><span>desktop</span>
                        </Menu.Item>*/}
                    </Menu>
                </Sider>
                <Main parent={locArr[1]} child={locArr[2]} />
            </Layout>
        );
    }
}

export default withRouter(Left);