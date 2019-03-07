import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from '../App.js';
import Homepage from './Homepage';
//import SignIn from './SingIn.js';

const Routes = () =>
    <App>
        <Switch>
            <Route exact path={"/Homepage.js"} component={Homepage}/>
            <Route exact path={"/"} component={Homepage}/>
        </Switch>
    </App>

export default Routes;