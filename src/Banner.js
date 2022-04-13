import React, { useEffect, useState } from "react";
import getting from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovies] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const req = await getting.get(request.fetchTrending);
      console.log(req.data.results);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  function trunc(str, n){
    return str?.length > n ? str.slice(0, n) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_title}</h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">{trunc(movie?.overview, 200)}</h1>
      </div>

      <div className="bannerFade"></div>
    </header>
  );
}

export default Banner;
