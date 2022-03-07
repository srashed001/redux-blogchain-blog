import { useSelector } from "react-redux";
import PostComment from "./PostComment";

function PostCommentList() {
  const { comments } = useSelector((st) => st.posts);

  if (!comments.length) return <h1>No comments</h1>;

  return (
    <ul className="list-group list-group-flush">
      {comments.map((comment) => (
        <li key={comment.id} className="list-group-item">
          <PostComment id={comment.id} key={comment.id} text={comment.text} />
        </li>
      ))}
    </ul>
  );
}

export default PostCommentList;
