import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

//container component for 
// wrapping our components in css classes
// <Outlet/> for rendering child routes
// of our parent routes.
// in this example: NavBar
const NavLayout = () => {
	return (
		<div className="nav-layout">
			<NavBar/>
			<br></br>
			<Outlet/>
		</div>
	)
}

export default NavLayout