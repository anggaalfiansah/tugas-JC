import React, { useState } from "react";
import "../styles.css";

function SignUp() {
  const [NIK, setNIK] = useState("");
  const [Nama, setNama] = useState("");
  const [TempatLahir, setTempatLahir] = useState("");
  const [TanggalLahir, setTanggalLahir] = useState("");
  const [Provinsi, setProvinsi] = useState("");
  const [Kota, setKota] = useState("");
  const [Kecamatan, setKecamatan] = useState("");
  const [Kelurahan, setKelurahan] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [Password, setPassword] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");
  return (
    <div className="body-custom">
      <nav
        className="header-halaman navbar navbar-light"
        style={{ width: "100%" }}
      >
        <div className="container-fluid justify-content-center">
          <span
            className="navbar-brand text-white"
            style={{ fontFamily: "Open Sans" }}
          >
            Sign Up
          </span>
        </div>
      </nav>

      <div className="container-fluid">
        {/* Form Input */}
        <div className="row">
          <div className="col-10 col-md-8 mt-2 mx-auto">
            {/* Input NIK */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="NIK"
              onChange={(e) => setNIK(e.target.value)}
              value={NIK}
            />

            {/* Input Nama */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Nama"
              onChange={(e) => setNama(e.target.value)}
              value={Nama}
            />

            {/* Input Tempat Lahir */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Tempat Lahir"
              onChange={(e) => setTempatLahir(e.target.value)}
              value={TempatLahir}
            />

            {/* Input Tanggal Lahir */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Tanggal Lahir"
              onChange={(e) => setTanggalLahir(e.target.value)}
              value={TanggalLahir}
            />

            {/* Input Provinsi */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Provinsi"
              onChange={(e) => setProvinsi(e.target.value)}
              value={Provinsi}
            />

            {/* Input Kabupaten/Kota */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Kabupaten/Kota"
              onChange={(e) => setKota(e.target.value)}
              value={Kota}
            />

            {/* Input Kecamatan */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Kecamatan"
              onChange={(e) => setKecamatan(e.target.value)}
              value={Kecamatan}
            />

            {/* Input Kelurahan */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Kelurahan"
              onChange={(e) => setKelurahan(e.target.value)}
              value={Kelurahan}
            />

            {/* Input Detail Alamat */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Alamat Detail"
              onChange={(e) => setAlamat(e.target.value)}
              value={Alamat}
            />

            {/* Input Password */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            />

            {/* Input Validasi Password */}
            <input
              type="text"
              className="form-control mt-3 form-style"
              placeholder="Konfirmasi Password"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={RepeatPassword}
            />
          </div>
        </div>

        {/* Tombol */}
        <div className="row mt-3">
          {/* Tombol Sign Up */}
          <div className="col-md-6 px-5 d-grid">
            <button className="btn btn-primary my-1 tombol">Sign Up</button>
          </div>

          {/* Tombol Cancel */}
          <div className="col-md-6 px-5 d-grid">
            <button className="btn btn-danger my-1 tombol">Cancel</button>
          </div>

          {/* Navigasi Jika Sudah Punya Akun */}
          <p>
            Already have account ? <a href="#">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
