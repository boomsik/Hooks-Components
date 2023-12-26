import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
import PostList from "../PostList/PostList";
function Pagination() {
  const [posts, setPosts] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 12;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);
  console.log(posts);
  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setPosts(posts.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(posts.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage, posts]);

  // const handlePageClick = (e) => {
  //   const newOffset = (e.selected * itemsPerPage) % posts.length;
  //   setItemOffset(newOffset);
  // };
  // console.log(posts);

  return (
    <>
      <PostList posts={posts} />
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </>
  );
}

export default Pagination;
