import React, {useState, useEffect} from 'react';
import './App.css';
import {Router, navigate} from "@reach/router";
import People from "./components/People";
import Planet from "./components/Planet";
import Film from "./components/Film";
import Species from "./components/Species";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";

function App() {
  const [searchterms, setSearchterms] = useState({
    resource: "",
    id: ""
  });

  const [result, setResult] = useState();

  useEffect(()=> {
    fetch(`https://swapi.py4e.com/api/${searchterms.resource}/${searchterms.id}`)
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
  }, [searchterms]);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("resources"));
    console.log(data.get("rearchId"));
    setSearchterms({
      resource: data.get("resources"),
      id: data.get("rearchId")
    })
    navigate(`/${data.get("resources")}/${data.get("rearchId")}`)
  }

  return (
    <div className="container mt-5">
      {/* Since the search form is shown on every route and we want to preserve its state across route changes, does it need to be rendered inside each route component? */}
      <form className="form-inline" onSubmit={handleSubmit}>
        <label htmlFor="selectResources">Search for: </label>
        <select name="resources" id="selectResources" className="form-control mx-sm-3">
          <option value="people">people</option>
          <option value="planets">planets</option>
          <option value="films">films</option>
          <option value="species">species</option>
          <option value="starships">starships</option>
          <option value="vehicles">vehicles</option>
        </select>
        <label htmlFor="inputID">ID: </label>
        <input type="text" id="inputID" name="rearchId" className="form-control mx-sm-3" />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {(result && result.name === "Error") ? (<div><p className="text-danger">{result.message}</p><img src="https://sciencefiction.com/wp-content/uploads/2020/01/ewan-mcgregor-as-obi-wan-kenobi-2-750x422.jpeg" alt=""/></div>) : null}
      
      {searchterms.id ? 
        (<Router>
          <People path="/people/:personId" result={result} />
          <Planet path="/planets/:planetId" result={result} setResult={setResult} />
          <Film path="/films/:filmId" result={result} />
          <Species path="/species/:speciesId" result={result} />
          <Starships path="/starships/:starshipId" result={result} />
          <Vehicles path="/vehicles/:vehicleId" result={result} />
        </Router>) : 
        (null)
      }
    </div>
  );
}

export default App;
