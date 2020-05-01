import React from "react";

const Film = props => {
	const {result} = props;
	if (result.created) {
		const date = new Date(result.created);
		const year = date.getFullYear();
		const month = date.getMonth()+1;
		const dt = date.getDate();
		if (dt < 10) {
			dt = "0" + dt;
		}
		if (month < 10) {
			month = "0" + month;
		}
		var created_date = year + "-" + month + "-" + dt;
	}
	
	if (result.name === "Error") {
		return(<div></div>);
	} else {
		return(
			<div className="mt-5">
				<h3>{result.title}</h3>
				<br/>
				<p><em>Created: </em>{created_date !== undefined ? created_date : null}</p>
				<p><em>Director: </em>{result.director}</p>
				<p><em>Episode #: </em>{result.episode_id}</p>
				<p><em>Producer: </em>{result.producer}</p>
			</div>
		);
	}
}

export default Film;