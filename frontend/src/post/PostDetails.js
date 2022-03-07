import { useEffect, useState } from "react";
import Post from "./Post";
import EditPost from "../forms/EditPost";
import PostComments from "../comments/PostComments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostFromApi, fetchChangeVote } from "../reducers/actionCreators";

function PostDetails() {
  const { postId } = useParams();

  const post = useSelector((st) => st.posts);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostFromApi(postId));
  }, [dispatch, postId]);

  if (!post) return <h1>Loading...</h1>;

  function changeVote(direction) {
    console.log("firing");
    dispatch(fetchChangeVote(postId, direction));
  }

  return (
    <div className="container">
      <div className="container">
        <div className="row text-center m-3">
          <h3>post: {postId}</h3>
        </div>
        <div className="row">
          <div className="container-fluid text-end">
            <button
              className="btn btn-outline-primary"
              onClick={() => changeVote("up")}
            >
              <i className="bi bi-hand-thumbs-up"></i>
            </button>
            <span className="text-muted mx-2">{post.votes}</span>
            <button
              onClick={() => changeVote("down")}
              className="btn btn-outline-secondary"
            >
              <i className="bi bi-hand-thumbs-down"></i>
            </button>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="container p-3">
            {editMode ? (
              <EditPost
                title={post.title}
                description={post.description}
                body={post.body}
                editMode={setEditMode}
                id={postId}
              />
            ) : (
              <Post
                title={post.title}
                description={post.description}
                body={post.body}
              />
            )}
          </div>
          <div className="row">
            <div className="container text-end">
              {editMode ? null : (
                <>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setEditMode(true)}
                  >
                    edit
                  </button>
                  <hr></hr>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container m-3">
        <div className="row">
          <PostComments />
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
