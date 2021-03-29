// import React from "react";

// export let Nombre = () => {
// 	return <h1>Piedra</h1>;
// };

import React from "react";
import { Link } from "react-router-dom";

let arregloTemporal = ["Carro", "casa", "Carro"];

export let Tarjeta = () => {
	return (
		//

		<div className="scrollmenu">
			<div>
				<h2>Personas</h2>
			</div>
			<div className="row flex-row flex-nowrap row-horizon">
				{arregloTemporal.map((item, indice) => {
					return (
						<div className="col-3" key={indice}>
							<div className="card card-block" style={{ width: "18rem" }}>
								<img
									src="https://www.hd-tecnologia.com/imagenes/articulos/2020/10/Viking-City-Builder-es-el-primer-RTS-con-Ray-Tracing-y-DLSS-2.0-y-fue-creado-por-una-sola-persona.jpg"
									classNameName="card-img-top"
									alt="..."
								/>
								<div className="container">
									<h5 className="card-title">{item}</h5>
									<p className="card-text">Gender:</p>
									<p className="card-text">Hair-Color:</p>
									<p className="card-text">Eye-Color</p>
									<button type="button" className="btn btn-outline-primary">
										Learn more!
									</button>
									<i
										className="fa fa-heart text-danger"
										style={{ background: "yellow" }}
										padding-left="30px"
									/>
									<Link />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
