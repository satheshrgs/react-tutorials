import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect, useParams } from 'react-router-dom';

const Home = () => {
    return (
        <div>Home Component</div>
    )
}

const Page1 = () => {
    const { id } = useParams();
    return (
        <div>Page1 Component--- {id} </div>
    )
}

const Page2 = () => {
    return (
        <div>Page2 Component</div>
    )
}

const NotFoundPage = () => {
    return (
        <div>Not Found Page</div>
    )
}

const routingApp = () => {
    return (
        <BrowserRouter>
            {/* <Redirect from='/' to='/home' /> */}
            <Link to='/home'>Home</Link>
            <Link to='/page1'>Page 1</Link>
            <Link to='/page2'>Page 2</Link>
            <Switch>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/page1/:id'>
                    <Page1 />
                </Route>
                <Route path='/page2' component={Page2}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>        
    );
}

export default routingApp;