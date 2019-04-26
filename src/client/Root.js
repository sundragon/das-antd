import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import View from 'components/View';

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <View/>
            </BrowserRouter>
        );
    }
}

export default Root;