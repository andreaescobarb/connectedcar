import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from '../App.js';
import Homepage from './Homepage';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Routes = () =>
    <App>
        <Switch>
            <Route exact path={"/Homepage.js"} component={Homepage}/>
            <Route exact path={"/SignIn.js"} component={SignIn}/>
            <Route exact path={"/SingUp.js"} component={SignUp}/>
            <Route exact path={"/"} component={Homepage}/>
        </Switch>
    </App>

export default Routes;