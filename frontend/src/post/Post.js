function Post({ title, description, body }) {
  return (
    <>
      <h3>{title}</h3>
      <p>
        <i>{description}</i>
      </p>
      <pre>{body}</pre>
    </>
  );
}

export default Post;
