import React, { Fragment, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../storage";
import classes from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faSearch } from "@fortawesome/free-solid-svg-icons";
import { requests } from "../../storage";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
const NavBar = (props) => {
  const searchNav = useNavigate();
  const movieNavigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  //ham doi link
  const MovieHandle = () => {
    movieNavigate("/", { replace: true });
  };
  const handleSearch = () => {
    searchNav("/search", { replace: true });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const hidden = isScrolled
    ? `${classes.scrolling} ${classes.fadein}`
    : `${classes.scrolling} ${classes.fadeOut}`;

  return (
    <Fragment>
      <div>
        {" "}
        <div className={hidden}></div>
      </div>

      <div className={classes.nav}>
        <div>
          <h1 onClick={MovieHandle} style={{ color: "#fb0000" }}>
            Movies App
          </h1>
        </div>
        <div>
          <h1>
            <FontAwesomeIcon
              onClick={handleSearch}
              icon={faSearch}
              color="#cbcbcb"
            />
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
