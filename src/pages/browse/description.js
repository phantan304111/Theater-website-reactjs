import React from "react";
import classes from "./depcription.module.css";
//phan mo ta phim
//the hien phan mo ta voi du lieu lay tu props
function Depcription(props) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{props.check && props.data.original_name}</h1>
      </div>
      <div className={classes.list}>
        <button>Play</button>
        <button>My List</button>
      </div>
      <div className={classes.description}>
        <p>
          {props.check &&
            (props.data.overview ? props.data.overview : props.data.name)}
        </p>
      </div>
    </div>
  );
}
export default Depcription;
