import { useEffect } from "react";
import React from "react";
import {
  getActionMovie,
  getComedy,
  getDocument,
  getHorror,
  getRomance,
  getTopRanked,
  getTrending,
} from "../storerage/storage";

import useStore from "../storerage/useStore";
import MoviesList from "./movielist";

function Content() {
  ////////Fetch du lieu, luu vao bien state
  const [state, dispatch] = useStore();
  const {
    fetchTrending,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
    fetchSearch,
  } = state;
  //////luu lai du lieu moi
  useEffect(() => {
    getTrending().then((data) => dispatch(data));
    getActionMovie().then((data) => dispatch(data));
    getTopRanked().then((data) => dispatch(data));
    getComedy().then((data) => dispatch(data));
    getHorror().then((data) => dispatch(data));
    getRomance().then((data) => dispatch(data));
    getDocument().then((data) => dispatch(data));
  }, [dispatch]);

  /////tao bang phim theo tung the loai
  //moi thanh phan movie list la mot hang
  return (
    <div>
      <div style={{ background: "black" }}>
        <MoviesList movie={fetchTrending} title="Xu Hướng" isImg={true} />
        <MoviesList movie={fetchTopRated} title="Xếp Hạng Cao " />
        <MoviesList movie={fetchActionMovies} title="Hành động" />
        <MoviesList movie={fetchComedyMovies} title="Hài" />
        <MoviesList movie={fetchHorrorMovies} title="Kinh dị" />
        <MoviesList movie={fetchRomanceMovies} title="Lãng mạn" />
        <MoviesList movie={fetchDocumentaries} title="Tài liệu" />
      </div>
    </div>
  );
}
export default Content;
