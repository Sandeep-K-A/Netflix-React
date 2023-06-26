import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  let randomNumber = Math.floor(Math.random() * 20);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[randomNumber]);
      });
  }, [randomNumber]);

  function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + "…" : str;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {movie ? truncate(movie.overview, 200) : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
