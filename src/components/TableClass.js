import React, { Component } from "react";
import { RowTable } from "./RowTable";

export default class TableClass extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movies: "",
    };
  }

  render() {
    return (
      <>
        <div className="col-lg-12 mb-4">
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
                  width="100%"
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
                    {this.state.loading ? (
                      <tr>Cargando...</tr>
                    ) : (
                      this.state.movies.map((movie) => (
                        <RowTable {...movie} key={movie.title} />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // Llamamos la Api
  async componentDidMount() {
    try {
      let response = await fetch("http://localhost:3001/movies");
      let result = await response.json();
      //console.log(result);
      this.setState({
        loading: false,
        movies: result.data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
