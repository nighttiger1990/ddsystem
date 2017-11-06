import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import './index.css';
import App from './App';
import Login from './Login'
import UnknowSite from './components/UnknowSite'
import registerServiceWorker from './registerServiceWorker';
import { LocaleProvider } from 'antd';
import viVN from 'antd/lib/locale-provider/vi_VN';
// import enUS from 'antd/lib/locale-provider/en_US';

const browser_history = createBrowserHistory()

ReactDOM.render(
    <LocaleProvider locale={viVN}>
        <Router history={browser_history}>
            <Switch>
                <Redirect exact path='/' to='/Home' component={Login} />
                <Route path='/Home' component={App} />
                <Route path='/Login' component={Login} />
                <Route path='*' component={UnknowSite} />
            </Switch>
        </Router>
    </LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
