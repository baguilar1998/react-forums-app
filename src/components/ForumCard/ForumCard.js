import React from 'react';
import './ForumCard.css';
const ForumCard = (props)=>{
    return(
        <div class="card">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Posted By User</h6>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}
export default ForumCard;