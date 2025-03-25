import React from 'react';
import '../styles/Comment.css'
import '../styles/CommentsList.css'

const Comment = ({ name, body, email}) => {
    return (
        <>
            <div className="comment">
                <span className="comment__author">{email}</span>
                <span className="comment__name">{name}</span>
                <span className="comment__body">{body}</span>
                <div className="post__divider"/>
            </div>
        </>
    );
};

export default Comment;
