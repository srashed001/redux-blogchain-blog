const INITIAL_STATE = {
  posts: null,
  titles: null,
  error: false,
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "FETCH_TITLES":
      return { ...state, titles: action.titles };
    case "FETCH_POST":
      return { ...state, posts: action.posts };
    case "EDIT_POST":
      return { ...state, posts: { ...state.posts, ...action.posts } };
    case "CHANGE_VOTE":
      const titlesCpy = state.titles.map((title) =>
        title.id === action.id ? { ...title, votes: action.votes } : title
      );
      const postCpy = { ...state.posts, votes: action.votes };
      return { ...state, titles: titlesCpy, posts: postCpy };
    case "ADD_COMMENT":
      return {
        ...state,
        posts: {
          ...state.posts,
          comments: [...state.posts.comments, action.comment],
        },
      };
    case "REMOVE_COMMENT":
      return {
        ...state,
        posts: {
          ...state.posts,
          comments: [
            ...state.posts.comments.filter(
              (comment) => comment.id !== action.id
            ),
          ],
        },
      };
    case "ERROR":
      return { ...state, error: true };
    case "ADD_POST":
      return { ...state };
    case "REMOVE_POST":
      return { ...state };
    default:
      return state;
  }
}

export default rootReducer;
