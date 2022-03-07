import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  fetchDeletePostFromApi,
  fetchEditPostFromApi,
} from "../reducers/actionCreators";

function EditPost({ title, description, body, editMode, id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title,
    description,
    body,
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
    editMode(false);
  }

  function saveChanges(e) {
    dispatch(fetchEditPostFromApi(id, formData));
  }

  function deletePost(e) {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove post"
    );
    if (confirmDelete) {
      dispatch(fetchDeletePostFromApi(id));
      return history.push("/");
    }
  }

  return (
    <div className="container">
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="visually-hidden">
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" class="visually-hidden">
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="visually-hidden">
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
          ></textarea>
        </div>
        <div className="mb-3 text-end">
          <button className="btn btn-primary" onClick={saveChanges}>
            save
          </button>
          <button className="btn btn-secondary mx-1">cancel</button>
          <button className="btn btn-danger" onClick={deletePost}>
            delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
