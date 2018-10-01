import React, {Component} from 'react';

class Login extends Component{

    constructor(){
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
            <p>Login Works</p>
        )
    }
}

export default Login;