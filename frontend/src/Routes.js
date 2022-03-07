import { Switch, Route  } from "react-router-dom";
import NewPostForm from "./forms/NewPostForm";
import Homepage from "./homepage/Homepage";
import PostDetails from "./post/PostDetails";

function Routes(){
    return (
        <Switch >
            <Route exact path='/'>
                <Homepage />
            </Route>
            <Route exact path='/new'>
                <NewPostForm />
            </Route>
            <Route exact path='/:postId'>
                <PostDetails />
            </Route>
        </Switch>
    )
}

export default Routes