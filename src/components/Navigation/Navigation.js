import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import './Navigation.css';

const Navigation = (props)=>{
    return(
        <nav className="navbar navbar-expand-md underline fixed-top">
            <Link  to="/" className="navbar-brand"><b>Forums App</b></Link>
            <div className="col-sm-5 centered">
                <div className="search">
                <   input className="form-control" type="text" placeholder="Search"/>
                </div>
            </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to='/login' className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/signup' className="nav-link" >Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}
export default withRouter(Navigation);