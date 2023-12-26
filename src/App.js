import Counter from "./Counter/Counter";
import Form from "./Form/Form";
import TodoList from "./TodoList/TodoList";
// import PostList from "./PostList/PostList";
// import ReactPaginate from "./Pagination/Pagination";
import TestPost from "./TestPost/TestPost";
import Timer from "./Timer/Timer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* //////Counter/////// */}
      <Counter />
      {/* //////FORM/////// */}
      <Form />
      {/* ////////////TODO LIST////////////// */}
      <TodoList />
      {/* //////// POST //////// */}
      <TestPost />
      {/* <PostList /> */}
      {/* <ReactPaginate /> */}
      {/* <ReactPaginate /> */}
      <Timer />
    </div>
  );
}
