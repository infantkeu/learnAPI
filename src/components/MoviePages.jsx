import React from "react";
import classNames from "../utils/classNames";

const MoviePage = (props) => {
  const handleClick = (value) => () => {
    props.changePage(value);
  };

  return (
    <ul className="tabs nav nav-pills nav-fill">
      <li className="nav-item">
        <div
          className={classNames("btn btn-primary", {
            disabled: props.page === 1
          })}
          onClick={handleClick(-1)}
        >
          Prev Page
        </div>
      </li>
      <li className="nav-item">
        <p className="h2">
          {" "}
          {props.page} / {props.totalPages}{" "}
        </p>
      </li>
      <li className="nav-item">
        <div
          className={classNames("btn btn-primary", {
            disabled: props.page === props.totalPages
          })}
          onClick={handleClick(1)}
        >
          Next Page
        </div>
      </li>
    </ul>
  );
};

export default MoviePage;
