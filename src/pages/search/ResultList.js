import { Fragment, useState } from "react";
import MoviesDetail from "../browse/moviesDetail";
import { addId, addItemMovie } from "../storerage/storage";
import useStore from "../storerage/useStore";
import classes from "./ResultList.module.css";
//thanh phan hien thi phim sau khi tim
function ResultList() {
  const [isDetail, setDetail] = useState(false);
  const [state, dispatch] = useStore();
  const { searchData } = state;
  const isdataSearch = searchData;
  return (
    <Fragment>
      <div className={classes.container}>
        {isdataSearch && searchData.length > 0 ? (
          searchData.map((item, index) => (
            <di key={index} className={classes.img}>
              <img
                onClick={() => {
                  dispatch(addItemMovie(item));
                  dispatch(addId(item.id));
                  setDetail(true);
                }}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.name ? item.name : item.title}
              />
            </di>
          ))
        ) : (
          <div className={classes.error}>
            <h1>Video not found</h1>
          </div>
        )}
        {isDetail && <MoviesDetail onClose={setDetail} data={state.addItem} />}
        {console.log(isDetail)}
      </div>
    </Fragment>
  );
}
export default ResultList;
