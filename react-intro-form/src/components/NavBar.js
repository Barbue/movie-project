import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home </Link>
            <Link to="/movies">Movie List </Link>
            <Link to="/movie">Movie </Link> 
        

            
        </div>
    )
}
export default NavBar

