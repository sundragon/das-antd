import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import App from 'shared/App';
import './Main.css';
const { Content } = Layout;


class Main extends Component {

    constructor({ props }) {
        super(props);
    }
    static defaultProps = {
        parent: '',
        child: ''
    }

    render() {

        return (
            <Layout style={{ padding: '12px' }}>
                {/* <Breadcrumb className="breadcrumb-text">
                    <Breadcrumb.Item>{this.props.parent}</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.child}</Breadcrumb.Item>
                </Breadcrumb> */}
                <Content style={{
                    background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}>
                    <App />
                </Content>
            </Layout>
        );
    }
}

export default Main;