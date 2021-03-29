import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Container, Row, Col } from "react-bootstrap"; // instalado de React-Bootstrap

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { NavbarMenu } from "./component/navbarMenus";
import { Footer } from "./component/footer";
//POR MI\

import Planets from "./views/planets";
import Characters from "./views/characters";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<Container>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Row>
						<Col>
							<NavbarMenu />
						</Col>
					</Row>

					<Row>
						<Col>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/planets" component={Planets} />
								<Route exact path="/characters" component={Characters} />

								{/* <Route exact path="/">
									<Tarjeta />
								</Route> */}

								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
						</Col>
					</Row>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</Container>
	);
};

export default injectContext(Layout);
