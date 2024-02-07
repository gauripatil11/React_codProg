import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const [posts, setPosts] = useState("");

  const url = 'https://jsonplaceholder.typicode.com/posts';

  async function fetchData() {
    const response = await fetch(
      `${url}/${id}`
    );
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  },[url]);
  return (
    <>
      {posts && (
        <div
          style={{
            margin: "1rem",
            padding: "1rem",
            border: "1px solid black",
          }}
        >
          <p>id : {posts.id}</p>
          <p>title : {posts.title}</p>
          <p>body : {posts.body}</p>
        </div>
      )}
    </>
  );
}

export default PostDetails;
