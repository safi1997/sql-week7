import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import { CommentContext } from "../contexts/CommentContext";
import { UserContext } from "../contexts/UserContext";

const PostCard = ({ post }) => {
  const { setSinglePost, getPostById, setPoster, createPdfById } =
    useContext(PostContext);
  const { commentList, setCommenter } = useContext(CommentContext);
  const { userList } = useContext(UserContext);

  let navigate = useNavigate();

  const showSinglePost = async (pPostId) => {
    navigate(`/post/${pPostId}`);
  };

  const findPoster = async (pPostUserId) => {
    const poster = userList?.find((user) => user.id === pPostUserId);
    setPoster(poster);
  };

  const findCommenter = async (pPostId) => {
    const comment = commentList?.find((comment) => comment.PostId === pPostId);
    const commenter = userList?.find((user) => user.id === comment?.UserId);
    setCommenter(commenter);
  };

  const handleClickDownload = async (pPostId) => {
    const post = await getPostById(pPostId);
    setSinglePost(post);
    await createPdfById(pPostId);
  };

  return (
    <div className="card m-3 col-5">
      <div className="card-header">
        posted on{" "}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }).format(new Date(post.createdAt))}
      </div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            showSinglePost(post.id);
            findPoster(post.UserId);
            findCommenter(post.id);
          }}
        >
          See The Post
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleClickDownload(post.id);
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default PostCard;
