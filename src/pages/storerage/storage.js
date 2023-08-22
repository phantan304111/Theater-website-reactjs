// API////// 95f7671263dfdbb5443d15847ce9f2a1

// Here's an example API request:

// https://api.themoviedb.org/3/movie/550?api_key=95f7671263dfdbb5443d15847ce9f2a1
import { useContext } from "react";
import { createContext } from "react";

// export const Context = createContext(null)

import {
  actionMovies_Type,
  ADD_ID,
  ADD_ITEM,
  ComodyMovies_TYPE,
  DocumentMovies_TYPE,
  HorrorMovies_TYPE,
  RomanceMovies_TYPE,
  SEARCH_TYPE,
  topRankMovied_TYPE,
  TrendingMovie_TYPE,
} from "./type";
//gan api va key vao cac muc can fetch
const API_KEY = "95f7671263dfdbb5443d15847ce9f2a1";
export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}`,
};

////link api du lieu chinh
const BASEURL = "https://api.themoviedb.org/3";
// cac hanh dong cua trang, them id, fetch api du lieu
export const addItemMovie = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};
export const addId = (payload) => {
  return {
    type: ADD_ID,
    payload,
  };
};

///// cac ham fetch API theo the loai
export const getTrending = async () => {
  try {
    const result = await fetch(`${BASEURL}${requests.fetchTrending}`);
    const list = await result.json();
    const data = list.results;
    return {
      type: TrendingMovie_TYPE,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};
export const getTopRanked = async () => {
  try {
    const result = await fetch(`${BASEURL}${requests.fetchTopRated}`);
    const list = await result.json();
    const data = list.results;
    return {
      type: topRankMovied_TYPE,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};
export const getActionMovie = async () => {
  try {
    const result = await fetch(`${BASEURL}${requests.fetchActionMovies}`);
    const list = await result.json();
    const data = list.results;

    return {
      type: actionMovies_Type,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};
export const getComedy = async () => {
  try {
    const result = await fetch(`${BASEURL}${requests.fetchComedyMovies}`);
    const list = await result.json();
    const data = list.results;
    return {
      type: ComodyMovies_TYPE,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};
export const getHorror = async () => {
  try {
    const result = await fetch(`${BASEURL}${requests.fetchHorrorMovies}`);
    const list = await result.json();
    const data = list.results;
    return {
      type: HorrorMovies_TYPE,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};
export const getRomance = async () => {
  try {
    const result = await fetch(`${BASEURL}${requests.fetchRomanceMovies}`);
    const list = await result.json();
    const data = list.results;
    return {
      type: RomanceMovies_TYPE,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};
export const getDocument = async () => {
  try {
    const result = await fetch(`${BASEURL}${requests.fetchDocumentaries}`);
    const list = await result.json();
    const data = list.results;
    return {
      type: DocumentMovies_TYPE,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};

export const getSearch = async (keywords) => {
  try {
    const result = await fetch(
      `${BASEURL}${requests.fetchSearch}&language=en-US&include_adult=false&query=${keywords}`
    );
    const list = await result.json();
    const data = list.results;
    return {
      type: SEARCH_TYPE,
      payload: data,
    };
  } catch (error) {
    throw new Error("something went wrong");
  }
};
function SHS_B(e, sc, eAmt, start, y) {
  e.scrollLeft = eAmt * sc + start;
}
///ham cuon list phai trai
export function smootHorizontalScrolling(e, time, amount, start) {
  var CurTime = 0;
  var eAmt = amount / 100;
  var scrollCounter = 0;
  const y = window.scrollY;
  while (CurTime <= 100) {
    window.setTimeout(SHS_B, CurTime, e, scrollCounter, eAmt, start, y);
    CurTime += time / 100;
    scrollCounter++;
  }
}

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
// export default useStore;
export default requests;
