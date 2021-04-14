import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import Planets from "../views/planets";
import PropTypes from "prop-types"; //para el onClick del VIEW DETAILS
import { Jumbotron, Button } from "react-bootstrap";

const Characters = props => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.fetchPlanets();
	// 	actions.fetchPeople();
	// }, []);

	console.log(props);

	// const indice = props.match.params.id;
	const indice = 0;

	return (
		<Jumbotron>
			<h1>{store.characters[indice].name}</h1>
			<p>
				<strong>Birth year:</strong> {store.characters[indice].birth_year}
			</p>
			<p>
				<strong>Gender:</strong> {store.characters[indice].gender}
			</p>
			<p>
				<strong>Height:</strong> {store.characters[indice].height}
			</p>
			<p>
				<strong>Mass:</strong> {store.characters[indice].mass}
			</p>
			<p>
				<Button variant="dark">Learn more</Button>
			</p>
		</Jumbotron>
	);
};

export default Characters;
