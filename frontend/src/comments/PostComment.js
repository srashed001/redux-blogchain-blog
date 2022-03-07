import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRemoveComment } from "../reducers/actionCreators";

function PostComment({ text, id }) {
  const dispatch = useDispatch();
  const {postId} = useParams() 

  function removeComment(){
    dispatch(fetchRemoveComment(postId, id))
  }
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <p>{text}</p>
        </div>
        <div className="col">
          <div className="text-end">
            <button className="btn btn-outline-danger" onClick={removeComment}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostComment
