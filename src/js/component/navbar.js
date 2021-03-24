import React from "react";
import { Link } from "react-router-dom";
import Cortito from "../../img/Cortito.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={Cortito} style={{ width: "75px" }} />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Esto que hace??</button>
				</Link>
			</div>
		</nav>
	);
};
