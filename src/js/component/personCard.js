// import React from "react";

// export let Nombre = () => {
// 	return <h1>Piedra</h1>;
// };

import React from "react";
import { Link } from "react-router-dom";

export let Tarjeta = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://www.hd-tecnologia.com/imagenes/articulos/2020/10/Viking-City-Builder-es-el-primer-RTS-con-Ray-Tracing-y-DLSS-2.0-y-fue-creado-por-una-sola-persona.jpg"
				classNameName="card-img-top"
				alt="..."
			/>
			<div className="">
				<h5 className="card-title">PropiedadACA</h5>
				<p>Info Personaje??</p>
				<Link />
			</div>
		</div>
	);
};
