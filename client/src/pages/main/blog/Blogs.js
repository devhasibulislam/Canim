import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../../../components/Title";
import displayAllBlogs from "../../../redux/thunk/blog/displayAllBlogs";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(displayAllBlogs());
  }, [dispatch]);

  return (
    <>
      <Title>Blogs</Title>
      <div className="container mx-auto lg:px-0 p-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
