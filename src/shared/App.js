import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CertificationPage, DetectionPage, NoticePage, SubscribersPage } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => ( 
                    <Redirect to="/kt/certification"/>                
                )}/>
                <Route path="/(kt/certification|sk/certification|lg/certification)/" component={CertificationPage} />
                <Route path="/(kt/detection|sk/detection|lg/detection)/" component={DetectionPage} />
                <Route path="/(kt/notice|sk/notice|lg/notice)/" component={NoticePage} />
                <Route path="/(kt/subscribers|sk/subscribers|lg/subscribers)/" component={SubscribersPage} />
            </div>
        );
    }
}

export default App;