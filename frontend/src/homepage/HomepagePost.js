import { useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchChangeVote } from "../reducers/actionCreators";

function HomepagePost({ id, title, description, votes }) {
  const dispatch = useDispatch();

  function changeVote(e) {
    console.log("firing");
    const { id: direction } = e.target;
    dispatch(fetchChangeVote(id, direction));
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3 w-50 shadow rounded">
        <div className="row">
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
          <div className="col-md-2 my-2">
            <div className="row">
              <div className="container text-center">
                <button className="btn btn-outline-primary">
                  <i
                    className="bi bi-hand-thumbs-up"
                    id="up"
                    onClick={changeVote}
                  ></i>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="container text-center">
                <p className="card-text">
                  <small className="text-muted">{votes}</small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="container text-center">
                <button className="btn btn-outline-secondary">
                  <i
                    className="bi bi-hand-thumbs-down"
                    id="down"
                    onClick={changeVote}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          <NavLink exact to={`/${id}`}>
            post: {id}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HomepagePost;
