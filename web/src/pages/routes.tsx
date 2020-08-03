import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherFrom';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" exact component={TeacherList}/>
            <Route path="/give-classes" exact component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default Routes;