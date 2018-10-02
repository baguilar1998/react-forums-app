import React from 'react';
import './ForumCard.css';
const ForumCard = (props)=>{
    const {posts} = props;
    const postList = posts.map(post=>{
        return(
        <div className="postCard">
            <div className="card" key={post.id}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Posted By User {post.id}</h6>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        </div>
        );
    });
    return(
        <div >
            {postList}
        </div>
    );
}
export default ForumCard;