import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import "./AddTypdf.css";

function AddTypdf() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdfUrl, setPdfurl] = useState("");
  const [imgUrl, setImgurl] = useState("");
  const [year, setYear] = useState("Third-Year");
  const [faculty, setFaculty] = useState("computer-science");

  async function addPdf() {
    const response = await axios.post("/createTyPdf", {
      title: title,
      description: description,
      pdfUrl: pdfUrl,
      imgUrl: imgUrl,
      year: year,
      faculty: faculty,
    });

    if (response.data.success) {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Ok!",
      });
      window.location.reload();
    } else {
      swal("Invalid Credientials");
    }
  }

  return (
    <>
      <div className="AddFypdf-form-container mt-5">
        <input
          type="text"
          className="form-control-sm"
          id="Name"
          placeholder="Enter Subject Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control-sm"
          id="Name"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control-sm"
          id="Name"
          placeholder="imgUrl"
          value={imgUrl}
          onChange={(e) => {
            setImgurl(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control-sm"
          id="Name"
          placeholder="pdfUrl"
          value={pdfUrl}
          onChange={(e) => {
            setPdfurl(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control-sm"
          id="Name"
          placeholder="year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control-sm"
          id="Name"
          placeholder="faculty"
          value={faculty}
          onChange={(e) => {
            setFaculty(e.target.value);
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-secondary" type="button" onClick={addPdf}>
            {" "}
            Add TY Pdf
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTypdf;
