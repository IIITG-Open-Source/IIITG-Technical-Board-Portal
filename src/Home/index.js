import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SkeletonTheme } from "react-loading-skeleton";
import MainPages from './pages';
import './home.module.css';

function Home(props) {
    return (
        <SkeletonTheme color="#a8a7a7" highlightColor="#b5b5b5">
            <Switch>
                <Route path="/#about" />
                <Route path="/#clubs" />
                <Route path="/#contact" />
                <Route path="/past-council" component={MainPages.PastCouncil} />
                <Route exact path="/" component={MainPages.Home} />
            </Switch>
        </SkeletonTheme>
    );
}

export default Home;