import React, { Fragment, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import { addId, addItemMovie } from "../storerage/storage";

import "../../index.css";
import useStore from "../storerage/useStore";
import classes from "./moviesDetail.module.css";
//thanh phan hien chi tiet phim, hien ra khi an vao mot phim trong lists
function MoviesDetail(props) {
  const [state, dispatch] = useStore();
  console.log(addId());
  const pathImg = "https://image.tmdb.org/t/p/w500";
  const [data, setData] = useState();
  //ham an hien description khi an vao va an lai
  const handleHidden = () => {
    props.onClose(false);
  };
  console.log(addItemMovie());
  ///// ham lay/hien detail phim
  const detailData = useCallback(async () => {
    console.log(" movies detail: id--------------", props.data.id);
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${props.data.id}/videos?api_key=9129f64928c1203ff0ce3b6a2bd5d64e`
      );
      const list = await result.json();
      setData(list.results);
    } catch {
      throw Error("some thing went wrong here");
    }
  }, [props.data.id]);
  //
  useEffect(() => {
    detailData();
  }, [detailData]);
  const isNull = !!data;

  function Backdrop() {
    //phan video hien thi
    const video = {
      height: "400",
      width: "50%",
      playerVars: {
        autoplay: 0,
      },
    };
    //phan id
    const index = Math.floor(Math.random() * isNull && data.length - 1);
    if (state.addId[0] === state.addId[1]) {
      props.onClose(false);
      dispatch(addItemMovie(null));
    }
    const isCheck = isNull && data.length > 0;
    return (
      <div className="backdrop">
        {isCheck ? (
          <div className={classes.YouTube}>
            <YouTube videoId={isNull && data[index].key} opts={video} />
          </div>
        ) : (
          <div className={classes.imgnull}>
            <img
              src={`${pathImg}${props.data.poster_path}`}
              alt={props.data.name ? props.data.name : props.data.title}
            />
          </div>
        )}
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>
              {isNull && (props.data.name ? props.data.name : props.data.title)}{" "}
              <hr width="350" align="left" />
            </h1>
          </div>
          <div>
            <div className={classes.release}>
              <p>
                Release Date :
                {isNull &&
                  (props.data.first_air_date
                    ? props.data.first_air_date
                    : props.data.release_date)}
              </p>
            </div>
            <div className={classes.vote}>
              <p> Vote :{isNull && props.data.vote_average} / 10</p>{" "}
            </div>

            <div className={classes.description}>
              <p> Description :{isNull && props.data.overview}</p>{" "}
            </div>
          </div>
          <div onClick={handleHidden} className={classes.x}>
            <h1>X</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
    </Fragment>
  );
}
export default MoviesDetail;
