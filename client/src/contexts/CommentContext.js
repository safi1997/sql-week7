import { createContext, useState } from "react";

export const CommentContext = createContext();

const CommentContextProvider = ({ children }) => {
  const [comment, setComment] = useState([]);
  const [commenter, setCommenter] = useState();

  const getCommentByPostId = async (pId) => {
    const response = await fetch(
      `http://localhost:8000/api/v1/comments?PostId=${pId}`
    );
    const data = await response.json();
    setComment(data);
  };

  return (
    <CommentContext.Provider
      value={{
        getCommentByPostId,
        setComment,
        comment,
        commenter,
        setCommenter,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
