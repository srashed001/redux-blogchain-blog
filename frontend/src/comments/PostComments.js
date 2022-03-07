import PostCommentForm from "./PostCommentForm";
import PostCommentList from "./PostCommentList";

function PostComments() {
  return (
    <div className="container">
      <div className="row">
        <PostCommentForm />
        <PostCommentList />
      </div>
    </div>
  );
}

export default PostComments;
