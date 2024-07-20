import React from "react";
import "./styles.css";
import data from "./data.json";
function Movies() {
	return (
		<div className="main">
			{data.map((element) => {
				return (
					<div className="movie-container">
						<img src={element.Poster} alt="Not Found " />
						<p>{element.Title}</p>
						<p>{element.Year}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Movies;
