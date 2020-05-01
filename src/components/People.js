import React, {useEffect, useState} from "react";
import {Link} from "@reach/router";

const People = props => {
	const [homeworld, setHomeworld] = useState("");
	const {result} = props;
	useEffect(() => {
		if ("homeworld" in result) {
		fetch(result.homeworld)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				setHomeworld(response);
			})
		}
	}, [result]);

	if (result.name === "Error") {
		return(<div></div>);
	} else {
		return(
			<div className="mt-5">
				<h3>{result.name}</h3>
				<br/>
				<p><em>Birth Year: </em>{result.birth_year}</p>
				<p><em>Height: </em>{result.height}</p>
				<p><em>Hair Color: </em>{result.hair_color}</p>
				<p><em>Eye Color: </em>{result.eye_color}</p>
				<p><em>Skin Color: </em>{result.skin_color}</p>
				<p>
					<em>Homeworld: </em>
					{homeworld.url ? (<Link to={"/planets/"+homeworld.url.split("/")[5]}>{homeworld.name}</Link>)
					: null
					}
				</p>
			</div>
		);
	}
}

export default People;