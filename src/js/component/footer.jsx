import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-auto" id="contacto">
				<div className="row pt-4">
					<div className="col-12 text-center">
						<label>
							<b>Mobil:</b>
							&nbsp;+5353434356
						</label>
						<label className="pl-4">
							<b>Correo:</b>
							&nbsp;mailto@hotmail.com
						</label>
						<label className="pl-4">
							<b>Direccion:</b>
							&nbsp;direccion del taller o casa
						</label>
					</div>
				</div>
				<div className="line" />
				<div className="row">
					<div className="col-12 text-center">
						<label>
							<b>Facebook</b>
						</label>
						<label className="pl-4">
							<b>Instagram</b>
						</label>
						<label className="pl-4">
							<b>Twitter</b>
						</label>
					</div>
				</div>
			</footer>
		);
	}
}
