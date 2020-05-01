import React from "react";

const Starships = props => {
	const {result} = props;
	if (result.name === "Error") {
		return(<div></div>);
	} else {
		return(
			<div className="mt-5">
				<h3>{result.name}</h3>
				<br/>
				<p><em>Model: </em>{result.model}</p>
				<p><em>Manufacturer: </em>{result.manufacturer}</p>
				<p><em>Cost in Credits: </em>{result.cost_in_credits}</p>
				<p><em>Passengers: </em>{result.passengers}</p>
			</div>
		);
	}
}

export default Starships;