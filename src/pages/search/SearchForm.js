import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearch } from "../storerage/storage";
import useStore from "../storerage/useStore";
import classes from "./SearchForm.module.css";
function SearchForm() {
  const navigate = useNavigate();
  ///ham chuyen thanh search rong
  const [keywords, setKeywords] = useState("");
  ///ham nhap lieu tim kiem
  const handleChangeInput = (event) => {
    let keywords = event.target.value;
    setKeywords(keywords);
    if (keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else navigate("/search");
  };
  const useQuery = () => new URLSearchParams(useLocation().search);
  const key = useQuery().get("keywords");

  const [state, dispatch] = useStore();
  //ham tim kiem
  const handleSearch = () => {
    console.log(getSearch());
    getSearch(key).then((data) => dispatch(data));
    setKeywords("");
  };
  return (
    <div className={classes.Container}>
      <div className={classes.searchform}>
        <FontAwesomeIcon
          className={classes.searchFa}
          icon={faSearch}
          color="#cbcbcb"
        />
        <div className={classes.searchResest}>
          <span>
            <button
              onClick={() => {
                navigate("./");
                setKeywords("");
              }}
            >
              Resest
            </button>
            <button
              onClick={handleSearch}
              style={{ background: "#00bbec", color: "white" }}
            >
              Search
            </button>
          </span>
        </div>
        <input
          className={classes.inputName}
          value={keywords}
          onChange={handleChangeInput}
          type="search"
        />
      </div>
    </div>
  );
}
export default SearchForm;
