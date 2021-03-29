import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Planets from "../views/planets";

export let Tarjeta = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="scrollmenu">
			<div>
				<h2>Characters</h2>
			</div>
			<div className="row flex-row flex-nowrap row-horizon">
				{store.characters.map((item, indice) => {
					return (
						<div className="col-3" key={indice}>
							<div className="card card-block" style={{ width: "18rem" }}>
								<img
									src="https://www.hd-tecnologia.com/imagenes/articulos/2020/10/Viking-City-Builder-es-el-primer-RTS-con-Ray-Tracing-y-DLSS-2.0-y-fue-creado-por-una-sola-persona.jpg"
									classNameName="card-img-top"
									alt="..."
								/>
								<div className="container">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Gender: {item.gender}</p>
									<p className="card-text">Hair-Color: {item.hair_color}</p>
									<p className="card-text">Eye-Color: {item.eye_color}</p>
									<button type="button" className="btn btn-outline-primary">
										View Character
									</button>
									{store.favorites.includes(item.name) ? null : (
										<i
											className="fa fa-heart text-danger"
											style={{ background: "yellow" }}
											onClick={() => actions.setFavorites(item.name)}
										/>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
