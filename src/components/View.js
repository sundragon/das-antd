import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './View.css'
import {Layout} from 'antd';
import Top from './layout/Top';
import Left from './layout/Left';
  
  class View extends Component {      
      render(){
        return (
          <Layout>
            <Top />
            <Left />
        </Layout>
      );
    }
  }

  export default View;