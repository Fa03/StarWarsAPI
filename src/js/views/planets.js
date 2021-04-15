import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import Planets from "../views/planets";
import PropTypes from "prop-types"; //para el onClick del VIEW DETAILS
import { Jumbotron, Button } from "react-bootstrap";

const Worlds = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const indice1 = params.id;

	return (
		<Jumbotron>
			<h1>{store.planets[indice1].name}</h1>
			<p>
				<strong>Orbital Period:</strong> {store.planets[indice1].orbital_period}
			</p>
			<p>
				<strong>Diameter:</strong> {store.planets[indice1].diameter}
			</p>
			<p>
				<strong>Gravity:</strong> {store.planets[indice1].gravity}
			</p>
			<p>
				<strong>Population:</strong> {store.planets[indice1].population}
			</p>
			<p>
				<Link to="/" className="btn btn-dark">
					Back
				</Link>
			</p>
		</Jumbotron>
	);
};

export default Worlds;
