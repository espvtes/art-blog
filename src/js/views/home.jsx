import React from "react";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 p-0">
						<div className="jumbotron jumbotron-fluid" id="home">
							<div className="container">
								<h1 className="display-4">Fluid jumbotron</h1>
								<p className="lead">
									This is a modified jumbotron that occupies
									the entire horizontal space of its parent.
								</p>
							</div>
						</div>
						<nav className="navbar sticky-top navbar-light">
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
									<a className="nav-link" href="#home">
										Home
									</a>
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
					</div>
				</div>
				{/* autor */}
				<div className="row px-4 py-4 autor">
					<div className="col-12 col-sm-3 py-4 px-4">
						<img
							src="https://www.vincentvangogh.org/images/self-portrait.jpg"
							className="img-autor img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-9">
						<h3 className="pt-4">
							<em>Rydel Griñan Legra</em>
						</h3>
						<p className="text-justify">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry is standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It
							has survived not only f ive centuries, but also the
							leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
						<p className="text-justify">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry is standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It
							has survived not only f ive centuries, but also the
							leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
					</div>
				</div>

				{/* obras gallery */}
				<div className="row obras">
					<div className="col-12 col-sm-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-2">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>
				</div>
				
				{/* the final div */}
			</div>
		);
	}
}
