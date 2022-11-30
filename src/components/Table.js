import React from "react";
import { RowTable } from "./RowTable";

export const Table = () => {
  return (
    <>
    <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            All the movies in the Database
          </h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width={"100%"}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Titulo</th>
                  <th>Calificación</th>
                  <th>Premios</th>
                  <th>Duración</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Titulo</th>
                  <th>Calificación</th>
                  <th>Premios</th>
                  <th>Duración</th>
                </tr>
              </tfoot>
              <tbody>

                <RowTable/>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
