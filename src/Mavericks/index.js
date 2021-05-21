import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SkeletonTheme } from "react-loading-skeleton";
import Pages from './pages';
import './mavericks.module.css';

function Mavericks(props) {
    return(
        <SkeletonTheme color="#a8a7a7" highlightColor="#b5b5b5">
            <Switch>
                <Route exact path="/mavericks" component={Pages.Home} />
            </Switch>
        </SkeletonTheme>
    )
}

export default Mavericks;