import { FaSearch } from "react-icons/fa"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">marSpace</Link>


        <ul>
            <FaSearch className='searchIcon'/>
        <div class="search-wrapper">
            <input type="search" id = "search" placeholder="Search Classes"/>
        </div>
        
            <CustomLink to = "/login">Log in</CustomLink>
            <CustomLink to = "/signup">Sign up</CustomLink>

            {/*temp for viewing */}
            <CustomLink to = "/dashboard">Dashboard</CustomLink> 
            <CustomLink to = "/profile">Profile</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return(
        <li className = {isActive? "active": ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}