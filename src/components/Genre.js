import React from "react";

export const Genre = ({genre}) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{genre}</div>
      </div>
    </div>
  );
};
