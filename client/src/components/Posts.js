import React, { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { PostContext } from "../contexts/PostContext";
import PostCard from "./PostCard";

const Posts = () => {
  const { postList } = useContext(PostContext);
  const [selectedOption, setSelectedOption] = useState("oldest");
  const [sortedList, setSortedList] = useState();

  useEffect(() => {
    if (selectedOption === "newest") {
      const sortedPostTemplate = postList.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setSortedList(sortedPostTemplate);
    }
  }, [selectedOption]);

  if (postList.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h2 className="mt-5 text-white">no post found...</h2>
        </div>
      </>
    );
  }

  {
    selectedOption === "newest"
      ? sortedList &&
        sortedList.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })
      : postList &&
        postList.map((post, index) => {
          return <PostCard key={index} post={post} />;
        });
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-3">
          <select
            className="form-select"
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="row">
          {/* {selectedOption === "newest"
            ? sortedList &&
              sortedList.map((post, index) => {
                return <PostCard key={index} post={post} />;
              })
            : postList &&
              postList.map((post, index) => {
                return <PostCard key={index} post={post} />;
              })} */}
        </div>
      </div>
    </div>
  );
};

export default Posts;
