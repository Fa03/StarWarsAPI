import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import Planets from "../views/planets";
import PropTypes from "prop-types"; //para el onClick del VIEW DETAILS
import { Jumbotron, Button } from "react-bootstrap";

const Characters = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log(store.characters);

	const indice1 = params.id;

	return (
		<Jumbotron>
			<h1>{store.characters[indice1].name}</h1>
			<p>
				<strong>Birth year:</strong> {store.characters[indice1].birth_year}
			</p>
			<p>
				<strong>Gender:</strong> {store.characters[indice1].gender}
			</p>
			<p>
				<strong>Height:</strong> {store.characters[indice1].height}
			</p>
			<p>
				<strong>Mass:</strong> {store.characters[indice1].mass}
			</p>
			<p>
				<Link to="/" className="btn btn-dark">
					Back
				</Link>
			</p>
		</Jumbotron>
	);
};

export default Characters;
