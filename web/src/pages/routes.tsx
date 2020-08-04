import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherFrom';
import NotFound from './NotFound';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/study" exact component={TeacherList}/>
                <Route path="/give-classes" exact component={TeacherForm}/>
                ]<Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;