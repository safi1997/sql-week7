import React, { useContext, useEffect } from "react";
import { PostContext } from "../contexts/PostContext";
import Navbar from "./Navbar";
import { CommentContext } from "../contexts/CommentContext";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { singlePost, poster, setSinglePost, getPostById } =
    useContext(PostContext);
  const { comment, commenter, getCommentByPostId } = useContext(CommentContext);

  let { postId } = useParams();

  const getSinglePostData = async () => {
    const data = await getPostById(postId);
    setSinglePost(data);
  };

  useEffect(() => {
    getSinglePostData();
    getCommentByPostId(postId);
  }, []);

  const commentTemplate = comment?.map((item) => {
    return (
      <>
        <div
          className="w-100 rounded-3 bg-white text-black p-3 my-2"
          key={item.id}
        >
          <p className="fw-semibold">{item.content}</p>
          By {commenter?.name} on{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(item?.createdAt))}
        </div>
      </>
    );
  });

  const formatDateTime = (date) => {
    try {
      if (!date) {
        return "";
      }
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(new Date(date));
    } catch (error) {
      console.log("Error formatting date:", error);
      return "";
    }
  };

  return (
    <>
      <Navbar />
      <div className="container text-white">
        <div className="title d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-1 fw-bold">{singlePost?.title}</h1>

          <p>
            published by {poster?.name} on
            {formatDateTime(singlePost?.createdAt)}
          </p>
        </div>
        <div className="content">
          <p>{singlePost?.content}</p>
          <h2>Comments</h2>
          {comment && comment.length === 0 ? (
            <p className="text-dark">No comment yet.</p>
          ) : (
            commentTemplate
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
