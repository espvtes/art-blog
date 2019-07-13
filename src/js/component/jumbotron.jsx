import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="container-fluid p-0">
				<div className="jumbotron jumbotron-fluid" id="home">
					<div className="container">
						<h1 className="display-4 name font-weight-bold">
							Raydel Griñan
						</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the
							entire horizontal space of its parent.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
