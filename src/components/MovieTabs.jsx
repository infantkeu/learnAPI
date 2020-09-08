import React from "react";
//import classNames from "../utils/classNames";

const MovieTabs = (props) => {
  const handleClick = (value) => () => {
    props.updateSortBy(value);
  };

  const getClass = (value) => {
    return `nav-link ${props.sort_by === value ? "active" : ""}`;
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClass("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClass("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClass("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;
