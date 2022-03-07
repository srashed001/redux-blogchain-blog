const INITIAL_STATE = {
    posts: {},
    titles: {},
    error: false
}

function postReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case "FETCH_TITLES":
            console.log('reducer')
            return {...state, titles: action.titles}
        case "ERROR":
            return {...state, error: true}
        case "ADD_POST":
            return {...state, [action.id]: { title: action.title, description: action.description, body: action.body}}
        case "REMOVE_POST":
            let {[action.id]: id, ...rest} = state
            return {...rest}
        default:
            return state
    }
}

export default postReducer