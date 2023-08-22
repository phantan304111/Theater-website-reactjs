import { useRef, useState } from "react";
import React from "react";
import classes from "./movielist.module.css";
import { smootHorizontalScrolling } from "../storerage/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import useStore from "../storerage/useStore";
import MoviesDetail from "./moviesDetail";
import { addId, addItemMovie } from "../storerage/storage";
//// thanh phan hien thi phim theo the loai
function MoviesList(props) {
  const { movie, title, isImg } = props;
  const slider = useRef();
  const MovieRef = useRef();
  const [isDetail, setDetail] = useState(false);
  const [state, dispatch] = useStore();
  const isData = movie;
  ////////ham cuon list sang phai

  const handleRight = () => {
    const maxScroll =
      slider.current.scrollWidth - slider.current.clientWidth / 2;

    if (slider.current.scrollLeft < maxScroll) {
      smootHorizontalScrolling(
        slider.current,
        250,
        MovieRef.current.clientWidth,
        slider.current.scrollLeft
      );
    }
  };
  ////////ham cuon list sang trai
  const handleLeft = () => {
    if (slider.current.scrollLeft > 0) {
      smootHorizontalScrolling(
        slider.current,
        220,
        -MovieRef.current.clientWidth,
        slider.current.scrollLeft
      );
    }
  };
  ///hien list
  return (
    <div>
      <div className={classes.black}>
        <div ref={slider} className={classes.container}>
          {isData &&
            movie.map((item, index) => (
              <div
                onClick={() => {
                  dispatch(addItemMovie(item));
                  dispatch(addId(item.id));
                  setDetail(true);
                }}
                key={index}
                ref={MovieRef}
                className={classes.img}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    isImg ? item.poster_path : item.backdrop_path
                  }`}
                  alt={item.name ? item.name : item.title}
                />
              </div>
            ))}
          {isDetail && (
            <MoviesDetail onClose={setDetail} data={state.addItem} />
          )}
        </div>
        <div style={{ position: "relative" }}>
          <div className={isImg ? classes.chevronleft : classes.chevronleftTwo}>
            <button onClick={handleLeft}>
              <FontAwesomeIcon icon={faChevronLeft} color="white" />
            </button>
          </div>
          <div
            className={isImg ? classes.chevronright : classes.chevronrightTwo}
          >
            <button onClick={handleRight}>
              <FontAwesomeIcon icon={faChevronRight} color="white" />
            </button>
          </div>
        </div>

        <h1 style={{ color: "white" }}>{title}</h1>
      </div>
    </div>
  );
}
export default MoviesList;
