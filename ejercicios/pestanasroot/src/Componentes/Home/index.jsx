
import {Link} from "react-router-dom"

export function Home(){

    return(
    <div>
        <div>
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div>
            <Link to = "/About">
                <button>About</button>
            </Link>         

            <Link to = "/Pricing">
                <button>Pricing</button>
            </Link>
        </div>
    </div>

    )
}




