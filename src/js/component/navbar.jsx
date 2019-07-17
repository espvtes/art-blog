import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-light">
				<a className="navbar-brand" href="#">
					<img
						src="https://totaltrademanagement.files.wordpress.com/2012/05/paint-brush-psd50308.png"
						className="nav-img"
						width="50"
						height="50"
						alt=""
					/>
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<Link to="/">
							<a className="nav-link home" href="#home">
								Home
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#curriculum">
							Curriculum
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#obras">
							Obras
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#proyecto">
							Proyectos
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							link
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contacto">
							Contacto
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
