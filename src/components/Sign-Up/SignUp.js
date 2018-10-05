import React,{Component} from 'react';
import './SignUp.css';
class SignUp extends Component{

    constructor(props){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            username: '',
            passowrd:'',
            email:''
        }
    }
    render(){
        return(
            <div className="signup-form">
                <div className="card">
                    <div className="card-body">
                        <h1>Sign Up</h1>
                        <p> Fill out the required fields</p>
                        <form id="Signup">
                            <div class="form-group">
                                <input type="text" class="form-control" id="firstName" placeholder="First Name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="lasttName" placeholder="Last Name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="lasttName" placeholder="Username"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email Address"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;