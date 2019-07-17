import React, { Component } from "react";
import { Link } from "react-router-dom";

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
				<div className="row pb-4">
					<div className="col-12 text-center">
						<a
							href="https://www.facebook.com/airen.delgado.5"
							target="-blank">
							<b>Facebook</b>
						</a>
						<a
							href="https://www.instagram.com/airendelgado/"
							className="pl-4"
							target="-blank">
							<b>Instagram</b>
						</a>
						<a
							href="https://twitter.com/?lang=es"
							className="pl-4"
							target="-blank">
							<b>Twitter</b>
						</a>
					</div>
				</div>
				<br className="pt-4" />
			</footer>
		);
	}
}
