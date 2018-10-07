import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Axios from '../../../node_modules/axios';
// Connects the component with the redux store
import { connect } from 'react-redux';
import './Home.css';
//Require Components
import ForumCard from '../ForumCard/ForumCard';
class Home extends Component{

    constructor(){
        super();
        /*this.state = {
            recentPosts: []
        }*/
    }
    
    /*componentDidMount(){
        // Temporary data for posts
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts =>{
          this.setState({
              recentPosts: posts.data.slice(0,10)
          });
          //console.log(this.state.recentPosts);
        });
    }*/

    render(){
        console.log(this.props);
        return(
            <div class="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <ForumCard posts={this.props.recentPosts}/>
                    </div>
                    <div className="col-lg-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <Link to='/create-post'><button type="button" class="btn btn-success">Create A Post</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// We get the data that we want to grab from redux using this function
const mapStateToProps = (state) => {
    return{
        recentPosts: state.recentPosts
    }

}

export default connect(mapStateToProps)(Home);