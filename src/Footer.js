import React from 'react';
import AvantFooter from './Avant/components/Footer';
import MainFooter from './Home/components/Footer';

function Footer(props) {
  const page = props.page;
  
  if(page === 'avant') {
    return <AvantFooter />;
  }
  else {
    return <MainFooter />;
  }
}

export default Footer;
