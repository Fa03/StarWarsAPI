import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Cortito from "../../img/Cortito.jpg";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap"; // instalado de React-Bootstrap
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image src={Cortito} style={{ width: "75px" }} alt="iconoSW" />
				</Link>
			</Navbar.Brand>
			{/* <Nav classsName="mr-auto">
				<Link className="nav-link" to="/planets">
					Planets
				</Link>
				<Link className="nav-link" to="/characters">
					Characters
				</Link> */}
			{/* </Nav> */}
			<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={index} href="#/action-1">
							{item} <i className="fa fa-trash" onClick={() => actions.deleteFavorite(index)} />
						</Dropdown.Item>
					);
				})}
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
