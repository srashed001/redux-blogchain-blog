
import {NavLink} from 'react-router-dom'

function Header(){

    return (
        <div>
            <h1 className='text-center'>blogchain</h1>
            <div>
                <NavLink className="btn btn-outline-primary m-3" exact to='/' >blogchain</NavLink>
                <NavLink className="btn btn-outline-primary m-3" exact to='/new' >add to blogchain</NavLink>
            </div>

        </div>
    )

}

export default Header