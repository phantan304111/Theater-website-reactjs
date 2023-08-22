import React, { useCallback } from "react";

import classes from "./Nav.module.css";
import "../storerage/storage";
import requests from "../storerage/storage";
import "./Nav.module.css";
import { useState } from "react";
import { useEffect } from "react";
///phan banner
const Banner = () => {
  const [error, setError] = useState(null);
  const [isScroll, setisScroll] = useState(false);
  const [Banner, setBanner] = useState(null);
  const isBanner = !!Banner;
  ///fetch thong tin va nhap vao du lieu
  const fetchRequest = useCallback(async () => {
    try {
      // console.log(1)
      const response = await fetch(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      //nhap thong tin fetch duocj vao han du lieu
      const data = await response.json();
      //hien banner ra la mot phim ngau nhien
      const bannerInfo =
        data.results[Math.floor(Math.random() * data.results.length - 1)];
      setBanner(bannerInfo);
    } catch (error) {
      setError(error.message || "something wrong");
    }
  }, []);
  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>{isBanner && Banner.original_name}</h1>
        </div>
        <div className={classes.list}>
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className={classes.description}>
          <p>{isBanner && (Banner.overview ? Banner.overview : Banner.name)}</p>
        </div>
      </div>

      {isBanner && (
        <div className={classes.banner}>
          <img
            className={classes.img}
            src={`${"https://image.tmdb.org/t/p/original/"}${
              !Banner.backdrop_path ? Banner.poster_path : Banner.backdrop_path
            }`}
            alt="film"
          />
        </div>
      )}
    </div>
  );
};
export default Banner;
