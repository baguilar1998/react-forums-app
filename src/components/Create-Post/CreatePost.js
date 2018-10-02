import React, {Component} from 'react';
import './CreatePost.css';
class CreatePost extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title">
                                    <h1>Create a post</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="createPost">
                                <div class="card">
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Title"/>
                                            </div>
                                            <div class="form-group">
                                                <textarea class="form-control" placeholder="Text (optional)" rows="5"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" class="btn btn-outline-secondary">Post</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreatePost;