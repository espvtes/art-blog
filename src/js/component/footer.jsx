import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-auto" id="contacto">
				<div className="row px-4 py-4">
					<div className="col-12 col-sm-4">
						<h6>Contacto:</h6>
						<p>
							<strong>Telefono:</strong>
							+5353664476
						</p>
						<p>
							<strong>Correo:</strong>
							emailto@hotmail.com
						</p>
					</div>
					<div className="col-12 col-sm-4">contacto aqui</div>
					<div className="col-12 col-sm-4">
						<div className="">
							<input
								type="text"
								className="fullName"
								placeholder="Nombre"
							/>
						</div>
						<div className="pt-2">
							<input
								type="text"
								className="email"
								placeholder="Correo"
							/>
						</div>
						<div className="pt-2">
							<input
								type="text"
								className="message"
								placeholder="Mensaje"
							/>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
