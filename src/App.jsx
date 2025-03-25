import './App.css'
import {useEffect, useState} from "react";
import List from "./components/List.jsx";
import Post from "./components/Post.jsx";

function App() {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
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
