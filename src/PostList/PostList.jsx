// import React, { useState, useEffect } from "react";

const PostList = (postss) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts",
  //       );
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       console.error("Failed to fetch posts:", error);
  //     }
  //   };
  //   fetchPosts();
  // }, []);
  // console.log(posts);
  // console.log(posts);
  return (
    <div>
      <ul>
        {postss.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
