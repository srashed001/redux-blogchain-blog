

function commentReducer(state={}, action){
    switch(action.type){
        case 'INITIATE_COMMENTS':
            return {...state, [action.postId]: {}}
        case "ADD_COMMENT":
            const postsCopy = state[action.postId]
            return {...state, [action.postId]: {...postsCopy, [action.id]: action.comment}}
        case "REMOVE_COMMENT":
            const postsCpy = state[action.postId]
            const {[action.id]: id, ...rest} = postsCpy
            return {...state, [action.postId]: {...rest}}
        default: 
            return state
    }
}

export default commentReducer