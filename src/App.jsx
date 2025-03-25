import './App.css'
import {useEffect, useState} from "react";
import List from "./components/List.jsx";
import Post from "./components/Post.jsx";
import {fetchPosts} from "./API/api.js";

function App() {
  const [posts, setPosts] = useState([])

    useEffect(() => {
        async function loadPosts() {
            const data = await fetchPosts();
            setPosts(data);
        }
        loadPosts();
    }, []);

  return (
      <>
        <main>
          <List items={posts} renderItem={(post) => <Post {...post} />} className={"post-list"} />
        </main>
      </>

  );
}

export default App
