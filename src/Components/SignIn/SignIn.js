import React, { useState } from "react";
import "../styles.css";

function SignIn() {
  const [NIK, setNIK] = useState("");
  const [Password, setPassword] = useState("");

  console.log(`NIK : ${NIK}, Password : ${Password}`);
  return (
    <div className="container-fluid body-custom-2">
      <div className="row">
        <div className="col-9 col-md-4 mx-auto mt-5 px-5 pt-5 d-grid background-custom">
          {/* Judul */}
          <h1 className="mt-5 mb-2 judul">Sign In</h1>

          {/* Input NIK */}
          <input
            type="text"
            className="form-control my-4 text-center form-style"
            placeholder="NIK"
            onChange={e => setNIK(e.target.value)}
            value={NIK}
          />

          {/* Input Password */}
          <input
            type="Password"
            className="form-control my-4 text-center form-style"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={Password}
          />

          {/* Tombol Sign In */}
          <button className="btn btn-primary my-4 tombol">Sign In</button>

          {/* Navigasi Jika Belum Punya Akun */}
          <p>
            Dont have account ? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
