import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="container-fluid p-0">
				<div className="jumbotron jumbotron-fluid" id="home">
					<div className="container">
						<h1 className="display-4 name font-italic">
							Raydel Griñan
						</h1>
					</div>
				</div>
			</div>
		);
	}
}
