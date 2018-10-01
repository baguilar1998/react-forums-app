import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import './Navigation.css';

const Navigation = (props)=>{
    return(
        <nav className="navbar navbar-expand-md ">
            <a className="navbar-brand" href="#"><b>Forums App</b></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link" >Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link">Link 3</Link>
                </li>
            </ul>
        </nav>
    );
}
export default withRouter(Navigation);