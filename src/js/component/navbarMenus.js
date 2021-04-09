import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Cortito from "../../img/Cortito.jpg";
import { Navbar, Image, Nav, DropdownButton, Dropdown, Button, ButtonGroup, Badge } from "react-bootstrap"; // instalado de React-Bootstrap
import { Context } from "../store/appContext";
import PropTypes from "prop-types"; //para el onClick del VIEW DETAILS

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar className="d-flex justify-content-between">
			<Navbar.Brand>
				<Link to="/">
					<Image
						src={Cortito}
						style={{ width: "75px" }}
						alt="iconoSW"
						onClick={props => this.props.history.push("/")}
					/>
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
			<Dropdown as={ButtonGroup}>
				<Button variant="dark">
					Favorites <Badge variant="light">{store.favorites.length}</Badge>
				</Button>
				<Dropdown.Toggle id="dropdown-basic-button" spli variant="dark">
					<Dropdown.Menu>
						{store.favorites.map((item, index) => {
							return (
								<Dropdown.Item key={index} href="#/action-1">
									{item} <i className="fa fa-trash" onClick={() => actions.deleteFavorite(index)} />
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown.Toggle>
			</Dropdown>
		</Navbar>
	);
};
