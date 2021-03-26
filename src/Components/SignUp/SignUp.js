import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "../styles.css";

function SignUp() {
  const [NIK, setNIK] = useState("");
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Telpon, setTelpon] = useState("");
  const [TempatLahir, setTempatLahir] = useState("");
  const [Alamat, setAlamat] = useState("");
  // State Tanggal Lahir & Pendukungnya
  const [TanggalLahir, setTanggalLahir] = useState(new Date());
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  const years = range(new Date().getFullYear(), 1900, -1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // State Provinsi & Pendukungnya
  const [Provinsi, setProvinsi] = useState({ id: 0, nama: "Pilih Provinsi" });
  const [ListProvinsi, setListProvinsi] = useState([]);
  // State Kota/Kabupaten & Pendukungnya
  const [Kota, setKota] = useState({ id: 0, nama: "Pilih Kota/Kabupaten" });
  const [ListKota, setListKota] = useState([]);
  // State Kecamatan & Pendukungnya
  const [Kecamatan, setKecamatan] = useState({ id: 0, nama: "Pilih Kecamatan" });
  const [ListKecamatan, setListKecamatan] = useState([]);
  // State Kelurahan & Pendukungnya
  const [Kelurahan, setKelurahan] = useState({ id: 0, nama: "Pilih Desa/Kelurahan" });
  const [ListKelurahan, setListKelurahan] = useState([]);
  // State Password & Validasinya
  const [Password, setPassword] = useState("");
  const [RepeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    getProvinsi();
    getKota();
    getKecamatan();
    getKelurahan();
  }, [Provinsi, Kota, Kecamatan, Kelurahan]);

  const url = "https://dev.farizdotid.com/api/daerahindonesia";

  const getProvinsi = () => {
    axios
      .get(`${url}/provinsi`)
      .then((response) => {
        // handle success
        console.log(response);
        setListProvinsi(response.data.provinsi);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const getKota = () => {
    axios
      .get(`${url}/kota?id_provinsi=${Provinsi.id}`)
      .then((response) => {
        // handle success
        console.log(response);
        setListKota(response.data.kota_kabupaten);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const getKecamatan = () => {
    axios
      .get(`${url}/kecamatan?id_kota=${Kota.id}`)
      .then((response) => {
        // handle success
        console.log(response);
        setListKecamatan(response.data.kecamatan);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const getKelurahan = () => {
    axios
      .get(`${url}/kelurahan?id_kecamatan=${Kecamatan.id}`)
      .then((response) => {
        // handle success
        console.log(response);
        setListKelurahan(response.data.kelurahan);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

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
        <form action="">
          <div className="row">
            <div className="col-10 col-md-8 mt-2 mx-auto">
              {/* Input NIK */}
              <input
                type="text"
                className="form-control mt-3 form-style"
                placeholder="NIK"
                onChange={(e) => setNIK(e.target.value)}
                value={NIK}
                required
              />

              {/* Input Nama */}
              <input
                type="text"
                className="form-control mt-3 form-style"
                placeholder="Nama"
                onChange={(e) => setNama(e.target.value)}
                value={Nama}
                required
              />

              {/* Input Email */}
              <input
                type="email"
                className="form-control mt-3 form-style"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                required
              />

              {/* Input Telpon */}
              <input
                type="text"
                className="form-control mt-3 form-style"
                placeholder="Nomor Handphone"
                onChange={(e) => setTelpon(e.target.value)}
                value={Telpon}
                required
              />

              {/* Input Tempat Lahir */}
              <input
                type="text"
                className="form-control mt-3 form-style"
                placeholder="Tempat Lahir"
                onChange={(e) => setTempatLahir(e.target.value)}
                value={TempatLahir}
                required
              />

              {/* Input Tanggal Lahir */}
              <div className="d-grid">
              <DatePicker
                className="form-control mt-3 form-style"
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <select
                      value={date.getFullYear()}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={months[date.getMonth()]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
                selected={TanggalLahir}
                onChange={(date) => setTanggalLahir(date)}
              />
              </div>

              {/* Input Provinsi */}
              <select
                className="form-select mt-3 form-style"
                value={Provinsi}
                onChange={(e) => setProvinsi(ListProvinsi[e.target.value])}
              >
                <option>{Provinsi.nama}</option>
                {ListProvinsi.map((item, key) => {
                  return (
                    <option key={key} value={key}>
                      {item.nama}
                    </option>
                  );
                })}
              </select>

              {/* Input Kabupaten/Kota */}
              <select
                className="form-select mt-3 form-style"
                value={Kota}
                onChange={(e) => setKota(ListKota[e.target.value])}
              >
                <option>{Kota.nama}</option>
                {ListKota.map((item, key) => {
                  return (
                    <option key={key} value={key}>
                      {item.nama}
                    </option>
                  );
                })}
              </select>

              {/* Input Kecamatan */}
              <select
                className="form-select mt-3 form-style"
                value={Kecamatan}
                onChange={(e) => setKecamatan(ListKecamatan[e.target.value])}
              >
                <option>{Kecamatan.nama}</option>
                {ListKecamatan.map((item, key) => {
                  return (
                    <option key={key} value={key}>
                      {item.nama}
                    </option>
                  );
                })}
              </select>

              {/* Input Kelurahan */}
              <select
                className="form-select mt-3 form-style"
                value={Kelurahan}
                onChange={(e) => setKelurahan(ListKelurahan[e.target.value])}
              >
                <option>{Kelurahan.nama}</option>
                {ListKelurahan.map((item, key) => {
                  return (
                    <option key={key} value={key}>
                      {item.nama}
                    </option>
                  );
                })}
              </select>

              {/* Input Detail Alamat */}
              <input
                type="text"
                className="form-control mt-3 form-style"
                placeholder="Alamat Detail"
                onChange={(e) => setAlamat(e.target.value)}
                value={Alamat}
                required
              />

              {/* Input Password */}
              <input
                type="text"
                className="form-control mt-3 form-style"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                required
              />

              {/* Input Validasi Password */}
              <input
                type="text"
                className="form-control mt-3 form-style"
                placeholder="Konfirmasi Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
                value={RepeatPassword}
                required
              />
            </div>
          </div>

          {/* Tombol */}
          <div className="row mt-3">
            {/* Tombol Sign Up */}
            <div className="col-md-6 px-5 d-grid">
              <button type="submit" className="btn btn-primary my-1 tombol">
                Sign Up
              </button>
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
        </form>
      </div>
    </div>
  );
}

export default SignUp;
