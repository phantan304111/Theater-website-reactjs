// import ActionMovies from "../browse/movieStore/ActionMovies";

import React from "react";
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
const init = {
  searchData: null,
  addId: [],
  addItem: null,
  fetchTrending: null,
  fetchTopRated: null,
  fetchActionMovies: null,
  fetchComedyMovies: null,
  fetchHorrorMovies: null,
  fetchRomanceMovies: null,
  fetchDocumentaries: null,
  fetchSearch: null,
};
function reducer(state, action) {
  switch (action.type) {
    case ADD_ID:
      return {
        ...state,
        addId: [action.payload, ...state.addId],
      };
    case ADD_ITEM:
      return {
        ...state,
        addItem: action.payload,
      };
    case TrendingMovie_TYPE:
      return {
        ...state,
        fetchTrending: action.payload,
      };
    case topRankMovied_TYPE:
      return {
        ...state,
        fetchTopRated: action.payload,
      };
    case actionMovies_Type:
      return {
        ...state,
        fetchActionMovies: action.payload,
      };
    case ComodyMovies_TYPE:
      return {
        ...state,
        fetchComedyMovies: action.payload,
      };
    case HorrorMovies_TYPE:
      return {
        ...state,
        fetchHorrorMovies: action.payload,
      };
    case RomanceMovies_TYPE:
      return {
        ...state,
        fetchRomanceMovies: action.payload,
      };
    case DocumentMovies_TYPE:
      return {
        ...state,
        fetchDocumentaries: action.payload,
      };
    case SEARCH_TYPE:
      return {
        ...state,
        searchData: action.payload,
      };

    default:
      throw new Error("sdfhsdihf");
  }
}
export { init };
export default reducer;
