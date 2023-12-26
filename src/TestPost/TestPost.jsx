import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./TestPost.css";
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const datas = posts;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
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
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(datas.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(datas.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, datas]);
  console.log(posts);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % datas.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="containers">
      <ul className="list">
        {currentItems.map((el) => (
          <li key={el.id} className="list_item">
            {el.title}
          </li>
        ))}

        <ReactPaginate
          breakLabel="....."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="pagination_item"
          previousClassName="pagination_item_tag"
          nextClassName="pagination_item_next"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
          activeClassName="active_li"
          breakClassName="free_dot"
        />
      </ul>
    </div>
  );
};

export default PostList;
