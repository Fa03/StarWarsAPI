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
			<div className="row flex-row flex-nowrap row-horizon mb-2">
				{store.planets.map((item, indice) => {
					return (
						<div className="col-3 mr-4" key={indice}>
							<div className="card card-block" style={{ width: "18rem" }}>
								<img
									src="https://cdn.rebrickable.com/media/thumbs/mocs/moc-26468.jpg/1000x800.jpg?1607352259.4214168"
									classNameName="card-img-top"
									alt="..."
								/>
								<div className="container">
									<h5 className="card-title text-center">{item.name}</h5>
									<p className="card-text">Population: {item.population}</p>
									<p className="card-text">Terrain: {item.terrain}</p>
									<div className="d-flex justify-content-between pb-2">
										<Link className="btn btn-outline-dark" to={`/planets/${indice}`}>
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
