import React, {Component} from 'react';
import './Home.css';
//Require Components
import ForumCard from '../ForumCard/ForumCard';
class Home extends Component{
    render(){
        return(
            <div class="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                        <ForumCard/>
                    </div>
                    <div className="col-lg-3">
                        <div className="side-content">
                            <div class="card text-center">
                                <div class="card-body">
                                <button type="button" class="btn btn-success">Create A Post</button>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;