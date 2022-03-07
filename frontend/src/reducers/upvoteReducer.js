function upvoteReducer(state = {}, action) {
  switch (action.type) {
    case "INITIATE":
      return { ...state, [action.id]: 0 };
    case "UPVOTE":
      return { ...state, [action.id]: state[action.id] + 1 };
    case "DOWNVOTE":
      return { ...state, [action.id]: state[action.id] - 1 };
    default:
      return state;
  }
}

export default upvoteReducer;
