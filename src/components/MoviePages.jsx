import React from "react";

const MoviePage = (props) => {
  return (
    <ul className="tabs nav nav-pills nav-fill">
      <li className="nav-item">
        <div className="btn btn-primary disabled">Prev Page</div>
      </li>
      <li className="nav-item">
        <p className="h2"> 1 / {props.totalPages} </p>
      </li>
      <li className="nav-item">
        <div className="btn btn-primary">Next Page</div>
      </li>
    </ul>
  );
};

export default MoviePage;
