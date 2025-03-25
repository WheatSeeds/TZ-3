import React, {useEffect, useState} from 'react';
import '../styles/PostList.css'
import '../styles/Post.css'
import List from "./List.jsx";
import Comment from "./Comment.jsx";

const Post = ({ title, body, id, userId }) => {
    const [comments, setComments] = useState([])
    const [commentVisible, setCommentVisible] = useState(false)

    async function fetchComments() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const data = await response.json();
        setComments(data);
    }
    const [user, setUser] = useState();
    async function fetchUser() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
        const data = await response.json();
        setUser(data[0].name);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    useEffect(() => {
        fetchUser();
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
