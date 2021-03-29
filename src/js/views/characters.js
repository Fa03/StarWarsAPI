import React, { useEffect, useContext } from "react";
import { Tarjeta } from "../component/personCard";
import { Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<Jumbotron>
			<h1>PERSONAJE</h1>
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
