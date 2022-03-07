
import ShoplyApi from "../api"

function fetchTitles(titles){
    return {
        type: "FETCH_TITLES",
        titles
    }
}
function fetchPost(post){
    return {
        type: "FETCH_POST",
        posts: post
    }
}
function editPost(post){
    return {
        type: "EDIT_POST",
        posts: post
    }
}

function changeVote(votes,id){
    return {
        type: "CHANGE_VOTE",
        votes,
        id
    }
}

function addComment(comment){
    return {
        type: "ADD_COMMENT",
        comment
    }
}

function removeComment(id){
    return {
        type: "REMOVE_COMMENT",
        id
    }
}

function addPost(){
    return {
        type: "ADD_POST"
    }
}
function removePost(){
    return {
        type: "REMOVE_POST"
    }
}

function handleError(error){
    return {
        type: "ERROR",
        error
    }
}



export function fetchTitlesFromApi(){
    return async function thunk(dispatch){
        try{
            let titles = await ShoplyApi.getTitles();
            dispatch(fetchTitles(titles))
        } catch(error){
            dispatch(handleError(error.response.data))
        }
    }
}

export function fetchPostFromApi(id){
    return async function thunk(dispatch){
        try{
            let post = await ShoplyApi.getPost(id)
            dispatch(fetchPost(post))
        }catch(error){
            dispatch(handleError(error.response.data))
        }
    }
}

export function fetchEditPostFromApi(id, data){
    return async function thunk(dispatch){
        try{
            let post = await ShoplyApi.editPost(id, data)
            console.log(post)
            dispatch(editPost(post))
        }catch(error){
            dispatch(handleError(error.response.data))
        }
    }
}
export function fetchDeletePostFromApi(id){
    return async function thunk(dispatch){
        try{
            await ShoplyApi.deletePost(id)
            dispatch(removePost())
        }catch(error){
            dispatch(handleError(error.response.data))
        }
    }
}

export function fetchChangeVote(id, direction){
    return async function thunk(dispatch){
        try{
            const {votes} = await ShoplyApi.changeVote(id, direction)
            dispatch(changeVote(votes, id))
        }catch(error){
            dispatch(handleError(error))
        }
    }
}

export function fetchAddComment(id, text){
    return async function thunk(dispatch){
        try{
            const res = await ShoplyApi.addComment(id, text)
            dispatch(addComment(res))
        }catch(error){
            dispatch(handleError(error.response.data))
        }
    }
}

export function fetchRemoveComment(postId, id){
    return async function thunk(dispatch){
        try{
            await ShoplyApi.removeComment(postId, id)
            dispatch(removeComment(id))
        }catch(error){
            dispatch(handleError(error.response.data))
        }
    }
}

export function fetchAddPost(data){
    return async function thunk(dispatch){
        try{
            await ShoplyApi.addPost(data)
            dispatch(addPost())
        }catch(error){
            dispatch(handleError(error.response.data))
        }
    }
}

