import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid p-0">
				{/* autor */}
				<div className="row py-4 px-4 autor">
					<div className="col-12 col-sm-3 py-4">
						<img
							src="https://www.vincentvangogh.org/images/self-portrait.jpg"
							className="img-autor img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-9 py-4">
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

				<hr className="border-bottom" />

				{/* obras gallery */}

				<div className="row py-4 px-4" id="obras">
					<div className="col-12 col-sm-2">
						<h4 className="font-italic font-weight-bold obras-menu text-obras">
							Obras
						</h4>
					</div>
				</div>
				<div className="row px-4 obras">
					<div className="col-12 px-4 col-sm-3 p-1">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
					</div>
					<div className="col-12 px-4 col-sm-3 p-1">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 px-4 col-sm-3 p-1">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
					</div>
					<div className="col-12 px-4 col-sm-3 p-1">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdUNM4ampTct8ridogQcvmk08gL2ada95_WIT6_0FexNUcNE_"
							className="img-fluid w-100"
						/>
					</div>

					<br />
				</div>
				<div className="row pt-4">
					<div className="col-12 pt-4 text-center">
						<Link to="/galeria">
							<button
								type="button"
								className="btn btn-warning font-weight-bold">
								Galeria
							</button>
						</Link>
					</div>
				</div>

				<hr className="border-bottom" />
				{/* curriculum */}
				<div className="row py-4 px-4 " id="curriculum">
					<div className="col-12 col-sm-4">
						<h4 className="font-italic text-curriculum curriculum-menu font-weight-bold">
							Curriculum
						</h4>
					</div>
				</div>
				<div className="row px-4">
					<div className="col-12 px-4">
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
				<div className="row pt-4">
					<div className="col-12 pt-4 text-center">
						<Link to="/curriculum">
							<button
								type="button"
								className="btn btn-warning font-weight-bold">
								Curriculum
							</button>
						</Link>
					</div>
				</div>
				<hr className="border-bottom" />
				{/* proyectos */}
				<div className="row pt-4 px-4" id="proyecto">
					<div className="col-12 col-sm-3">
						<h4 className="font-italic font-weight-bold proyecto-menu text-proyecto">
							Proyectos
						</h4>
					</div>
				</div>
				<div className="row px-4 py-4">
					<div className="col-12 col-sm-4 px-4">
						<img
							src="https://www.salirconarte.com/wp-content/uploads/2017/08/photorealistic-pencil-drawings-renaissance-hyperrealism-emanuele-dascanio-25.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-4 px-4">
						<img
							src="https://www.salirconarte.com/wp-content/uploads/2017/08/photorealistic-pencil-drawings-renaissance-hyperrealism-emanuele-dascanio-25.jpg"
							className="img-fluid w-100"
						/>
					</div>
					<div className="col-12 col-sm-4 px-4">
						<img
							src="https://www.salirconarte.com/wp-content/uploads/2017/08/photorealistic-pencil-drawings-renaissance-hyperrealism-emanuele-dascanio-25.jpg"
							className="img-fluid w-100"
						/>
					</div>
				</div>
				<div className="row py-4">
					<div className="col-12 text-center">
						<Link to="/proyectos">
							<button
								type="button"
								className="btn btn-warning font-weight-bold">
								Proyecto
							</button>
						</Link>
					</div>
				</div>

				{/* the final div */}
			</div>
		);
	}
}
