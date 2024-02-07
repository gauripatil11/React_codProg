import { useState, useEffect } from "react";
import Post from "../component/Post";

function Posts() {
  const [posts, setPosts] = useState("");

  const url = "https://jsonplaceholder.typicode.com/posts"
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  },[url]);

  return (
    <>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id}{...post} />;
        })}
    </>
  );
}

export default Posts;
