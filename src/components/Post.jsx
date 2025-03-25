import React, {useEffect, useState} from 'react';
import '../styles/PostList.css'
import '../styles/Post.css'
import List from "./List.jsx";
import Comment from "./Comment.jsx";
import {fetchComments, fetchUser} from "../API/api.js";

const Post = ({ title, body, id, userId }) => {
    const [comments, setComments] = useState([])
    const [commentVisible, setCommentVisible] = useState(false)
    const [user, setUser] = useState();

    useEffect(() => {
        async function loadComments() {
            const data = await fetchComments(id);
            setComments(data);
        }
        async function loadUser() {
            const data = await fetchUser(userId);
            setUser(data[0].name);
        }
        loadUser();
        loadComments();
    }, []);


    return (
        <div className="post">
            <span>{user}</span>
            <div className="post__divider"/>
            <span className="post__title">{title}</span>
            <div className="post__divider"/>
            <span className="post__body">{body}</span>
            <div className="post__divider"/>
            {commentVisible
                ?(<>
                    <List items={comments} renderItem={(comment) => <Comment {...comment} />}
                          className={"comments-list"}/>
                    <button onClick={() => setCommentVisible(!commentVisible)}>Hide comments</button>
                </>)
                : <button onClick={() => setCommentVisible(!commentVisible)}>View comments</button>
            }


        </div>
    );
};

export default Post;
