
import {Link} from "react-router-dom"

export function Pricing (){

    return(
        <div>
        <div>
            <h2>Pricing</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div>
            <Link to = "/Home">
                <button>Home</button>
            </Link>         

            <Link to = "/About">
                <button>about</button>
            </Link>
        </div>
        </div>
    )
}

