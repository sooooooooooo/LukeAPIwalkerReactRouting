import React from "react";

const Species = props => {
	const {result} = props;
	if (result.name === "Error") {
		return(<div></div>);
	} else {
		return(
			<div className="mt-5">
				<h3>{result.name}</h3>
				<br/>
				<p><em>Classification: </em>{result.classification}</p>
				<p><em>Designation: </em>{result.designation}</p>
				<p><em>Avg Height: </em>{result.average_height}</p>
				<p><em>Skin Colors: </em>{result.skin_colors}</p>
			</div>
		);
	}
}

export default Species;