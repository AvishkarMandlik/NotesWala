import Navbar from "./../components/Navbar/Navbar";
import { currentUser } from "../util/currentUser";
import { notadmin } from "../util/notadmin";

import AddTypdf from "./AddTypdf/AddTypdf";
import AddSypdf from "./AddSypdf/AddSypdf";
import AddFypdf from "./AddFypdf/AddFypdf";
import './Admin.css'

function Admin() {
  if (currentUser.role === "admin") {
    return (
      <>
      <div className="title-container">
      <Navbar/>
     </div>
      <div className="container">
        <div className="dashboard-heading">
        <h1 className="text-center ">Welcome, to Control Panel {currentUser?.name}!</h1>
        </div>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card-body">{<AddFypdf />}</div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card-body">{<AddSypdf />}</div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card-body">{<AddTypdf />}</div>
          </div>
        </div>
      </div>
      </>
    );
  } 
  else {
    
      notadmin();
    
  }
}

export default Admin;
