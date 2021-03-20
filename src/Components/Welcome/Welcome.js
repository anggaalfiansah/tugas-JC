import React from "react";

function Welcome() {
  return (
    <div className="container-fluid body-custom-2">
      <div className="row">
        <div className="col-9 col-md-4 mx-auto mt-5 px-5 pt-5 d-grid background-custom">
          {/* Judul */}
          <h1 className="mb-2 judul">Welcome</h1>
          <h1 className="mb-2 judul-2">to</h1>
          <h1 className="mb-2 judul-3">COVID-19 Apps</h1>

          {/* Tombol Sign In */}
          <button className="btn btn-primary my-4 tombol">Sign In</button>

          {/* Tombol Sign Up */}
          <button className="btn btn-primary my-4 tombol">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
