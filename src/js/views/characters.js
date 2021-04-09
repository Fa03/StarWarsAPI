import React, { useEffect, useContext } from "react";
// import { Tarjeta } from "../component/personCard";  se puede borrar no se usa
import { Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const Characters = indice => {
	// const { store, actions } = useContext(Context);

	return (
		<Jumbotron>
			<h1>TESTEeeee</h1>
			<p>
				This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
				content or information.
			</p>
			<p>
				<Button variant="primary">Learn more</Button>
			</p>
		</Jumbotron>
	);
};

export default Characters;
