import React, {useEffect} from "react";

const Planet = props => {
	const {result, planetId, setResult} = props;
	console.log(planetId);

	useEffect(()=> {
    fetch(`https://swapi.py4e.com/api/planets/${planetId}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("These aren't the droids you're looking for")
        } else {
          return response
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setResult(response);
      })
      .catch(err => {
        console.log(err);
        setResult(err);
      })
  }, [planetId]);

  const numberWithCommas = x => x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return(
		<div className="mt-5">
			<h3>{result.name}</h3>
			<br/>
			<p><em>Climate: </em>{result.climate}</p>
			<p><em>Terrain: </em>{result.terrain}</p>
			<p><em>Surface Water: </em>{parseInt(result.surface_water) > 0 ? "yes" : "no"}</p>
			<p><em>Population: </em>{result.population?numberWithCommas(result.population):null}</p>
		</div>
	);
}

export default Planet;