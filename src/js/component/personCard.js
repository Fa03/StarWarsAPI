import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import Planets from "../views/planets";
import Characters from "../views/characters";
import PropTypes from "prop-types"; //para el onClick del VIEW DETAILS

export let Tarjeta = () => {
	const { store, actions } = useContext(Context);
	let urlImagen = "";

	return (
		<div className="scrollmenu">
			<div>
				<h2>Characters</h2>
			</div>
			<div className="row flex-row flex-nowrap row-horizon mb-2">
				{store.characters.map((item, indice) => {
					return (
						<div className="col-3 mr-4" key={indice}>
							<div className="card card-block" style={{ width: "18rem" }}>
								<img
									//     {store.imgPer.map((item2, indice2) => {
									//         return()
									//         if (item2.name==item.name){
									//             urlImagen=item2.url;
									//             break
									//             }

									//     })
									//     urlImagen!="" ? src=urlImagen : src="https://www.lego.com/cdn/cs/set/assets/bltc1dae2db229ec42e/75251.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
									// }
									src="https://www.lego.com/cdn/cs/set/assets/bltc1dae2db229ec42e/75251.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1"
									classNameName="card-img-top"
									alt="..."
								/>
								<div className="container">
									<h5 className="card-title text-center">{item.name}</h5>
									<p className="card-text">Gender: {item.gender}</p>
									<p className="card-text">Hair-Color: {item.hair_color}</p>
									<p className="card-text">Eye-Color: {item.eye_color}</p>
									<div className="d-flex justify-content-between pb-2">
										<Link className="btn btn-outline-dark" to={`/characters/${indice}`}>
											View Character
										</Link>
										{store.favorites.includes(item.name) ? null : (
											<i
												className="fa fa-heart fa-2x"
												onClick={() => actions.setFavorites(item.name)}
											/>
										)}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
