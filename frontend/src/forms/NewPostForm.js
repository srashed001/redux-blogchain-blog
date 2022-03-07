import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAddPost } from "../reducers/actionCreators";

function NewPostForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchAddPost(formData));
    history.push("/");
  }

  return (
    <div className="container">
      <h1>newBlog</h1>
      <div className="row">
        <div className="col">
          <div className="container">
            <form className="" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="blogTitle"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="blogDescription"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="body" className="form-label">
                  body
                </label>
                <textarea
                  className="form-control"
                  id="body"
                  rows="7"
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                  placeholder="blogBody"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary me-1">add</button>
                <button className="btn btn-secondary">cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <h3>{formData.title}</h3>
            <p>
              <i>{formData.description}</i>
            </p>
            <hr></hr>
            <pre>{formData.body}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostForm;
