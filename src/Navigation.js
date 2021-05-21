import React from 'react';
import HomeNavigation from './Home/components/Navigation';
import AvantNavigation from './Avant/components/Navigation';
import MavericksNavigation from './Mavericks/components/Navigation';

function Navigation(props) {
    const page = props.page;

    if(page === 'avant') {
        return <AvantNavigation />
    }
    else if(page === 'mavericks') {
        return <MavericksNavigation />
    }
    else {
        return <HomeNavigation />
    }
}

export default Navigation;