import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAddComment } from "../reducers/actionCreators";

function PostCommentForm() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { postId } = useParams();

  function handleChange(e) {
    const { value } = e.target;
    setComment((comment) => value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchAddComment(postId, comment));
    setComment("");
  }

  return (
    <div className="container">
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="visually-hidden"></label>
          <input
            type="text"
            className="form-control"
            id="comment"
            name="comment"
            value={comment}
            onChange={handleChange}
            placeholder="newComment"
            required
          />
        </div>
        <div className="mb-3 text-end">
          <button className="btn btn-primary me-1">post</button>
        </div>
      </form>
    </div>
  );
}

export default PostCommentForm;
