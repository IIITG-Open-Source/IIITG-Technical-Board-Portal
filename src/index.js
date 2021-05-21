import { React, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

ReactDOM.render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>, document.getElementById('root'));