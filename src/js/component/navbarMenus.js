import React from "react";
import { Link } from "react-router-dom";
import Cortito from "../../img/Cortito.jpg";
import { Navbar, Image, NavbarBrand, Nav, DropdownButton, Dropdown } from "react-bootstrap"; // instalado de React-Bootstrap

export const NavbarMenu = () => {
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image src={Cortito} style={{ width: "75px" }} alt="iconoSW" />
				</Link>
			</Navbar.Brand>
			<Nav classsName="mr-auto">
				<Link className="nav-link" to="/planets">
					Planets
				</Link>
				<Link className="nav-link" to="/characters">
					Personajes
				</Link>
			</Nav>
			<DropdownButton id="dropdown-basic-button" title="Favorites">
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</DropdownButton>
		</Navbar>

		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">
		// 			<img src={Cortito} style={{ width: "75px" }} />
		// 		</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Favorites</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
