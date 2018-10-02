import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Axios from '../../../node_modules/axios';
import './Home.css';
//Require Components
import ForumCard from '../ForumCard/ForumCard';
class Home extends Component{

    constructor(){
        super();
        this.state = {
            recentPosts: []
        }
    }
    
    componentDidMount(){
        // Temporary data for posts
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts =>{
          this.setState({
              recentPosts: posts.data.slice(0,10)
          });
          console.log(this.state.recentPosts);
        });
    }

    render(){
        return(
            <div class="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <ForumCard posts={this.state.recentPosts}/>
                    </div>
                    <div className="col-lg-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <Link to='/create-post'><button type="button" class="btn btn-success">Create A Post</button></Link>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;