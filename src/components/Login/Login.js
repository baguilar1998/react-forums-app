import React, {Component} from 'react';
import './Login.css';

class Login extends Component{

    constructor(props){
        super();
        /**
         * The state will represent the following username
         * and password that they have entered in
         */
        this.state = {
            username:'',
            password:''
        }
    }

    render(){
        return(
            <div className="login-form">
                <div className="card">
                    <div className="card-body">
                        <h1>Login</h1>
                        <form id="Login">
                            <div class="form-group">
                                <input type="email" class="form-control" id="inputEmail" placeholder="Email Address"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                            </div>
                            <div class="forgot">
                                <a href="#">Forgot password?</a>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;