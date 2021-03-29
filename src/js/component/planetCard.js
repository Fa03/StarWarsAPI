import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export let TarjetaPlaneta = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="scrollmenu">
			<div>
				<h2>Planets</h2>
			</div>
			<div className="row flex-row flex-nowrap row-horizon">
				{store.planets.map((item, indice) => {
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
									<p className="card-text">Population: {item.population}</p>
									<p className="card-text">Terrain: {item.terrain}</p>
									<button
										type="button"
										className="btn btn-outline-primary"
										onClick={() => alert(indice)}>
										View Planet
									</button>
									<i className="fa fa-heart text-danger" style={{ background: "yellow" }} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
