import React, { useState } from "react";


import "./Admin.css";

function Admin() {


  // Base64 conversion code starts here
  const [baseImage, setBaseImage] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      localStorage.setItem("baseImage",setBaseImage)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
     
    });

    // Base64 conversion code end here
  };

  return (
    <>
     
      <div className="Admin">
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
        <br></br>
        <img alt={baseImage} height="200px" />
      </div>
   
    </>
  );
}

export default Admin;
