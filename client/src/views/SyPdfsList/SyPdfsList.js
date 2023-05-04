import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import { currentUser } from "../../util/currentUser";
import PdfCard from "../../components/PdfCard";
import "./SyPdfsList.css";

import { loginRequired } from "../../util/loginRequired";

function SyPdfsList() {
  const [searchText, setSearchText] = useState("");
  const [currentPdfItems, setAllPdfitems] = useState([]);

  async function fetchAllItem() {
    const response = await axios.get("/SyallPdfs");
    console.log(response.data.data);
    setAllPdfitems(response.data.data);
  }

  async function fetchSpecificItems() {
    const response = await axios.get(`/Sypdfsbytitle?title=${searchText}`);
    console.log(response.data.data);
    setAllPdfitems(response.data.data);
  }

  useEffect(() => {
    if (searchText.length > 0) {
      fetchSpecificItems();
    } else {
      fetchAllItem();
    }
  }, [searchText]);


  useEffect(() => {
    loginRequired();
  }, []);

  return (
    <div>
      <Navbar user={currentUser?.name} />
      <div className="search-container">
        <input
          type="text"
          placeholder="Type to search your Subject Pdf"
          className="input-search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <div className="row ">
        <h2 className="about-heading">Second Year PDF's</h2>
          {currentPdfItems?.map((pdfs) => {
            return (
              <PdfCard
                year={pdfs.year}
                title={pdfs.title}
                description={pdfs.description}
                imgUrl={pdfs.imgUrl}
                faculty={pdfs.faculty}
                pdfUrl={pdfs.pdfUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SyPdfsList;
