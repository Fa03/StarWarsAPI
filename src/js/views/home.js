import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Tarjeta } from "../component/personCard";
import { TarjetaPlaneta } from "../component/planetCard";
import { Context } from "../store/appContext";

// por mi

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanets();
		actions.fetchPeople();
	}, []);
	return (
		<Container>
			<Row>
				<Col>
					<Tarjeta />
				</Col>
			</Row>
			<Row>
				<Col>
					<TarjetaPlaneta />
				</Col>
			</Row>
		</Container>
	);
};
