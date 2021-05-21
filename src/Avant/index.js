import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SkeletonTheme } from "react-loading-skeleton";
import Pages from './pages';
import './avant.module.css';

function Avant(props) {
    return (
        <SkeletonTheme color="#a8a7a7" highlightColor="#b5b5b5">
            <Switch>
                <Route path="/avant/gallery" component={Pages.Gallery} />
                <Route path="/avant/events" component={Pages.Event} />
                <Route path="/avant/past-coordinators" component={Pages.PastCoordinators} />
                <Route path="/avant/resources" component={Pages.Resources} />
                <Route exact path="/avant" component={Pages.Home} />
            </Switch>
        </SkeletonTheme>
    );
}

export default Avant;