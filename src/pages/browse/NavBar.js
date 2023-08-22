import React, { Fragment, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../storerage/storage";
import classes from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//thanh phan nav bar
const NavBar = (props) => {
  const searchNav = useNavigate();
  const movieNavigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  //ham doi link sang honme/search
  const MovieHandle = () => {
    movieNavigate("/", { replace: true });
  };
  const handleSearch = () => {
    searchNav("/search", { replace: true });
  };

  /////ham hien thi nav khi cuon, <40 khong hien background den
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
  ////thay doi class cua nav
  const hidden = isScrolled
    ? `${classes.scrolling} ${classes.fadein}`
    : `${classes.scrolling} ${classes.fadeOut}`;

  return (
    <div>
      <div>
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
              color="#bcbcbc"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
