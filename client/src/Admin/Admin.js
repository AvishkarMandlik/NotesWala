import { currentUser } from "../util/currentUser";

import AddTypdf from "./AddTypdf/AddTypdf";
import AddSypdf from "./AddSypdf/AddSypdf";
import AddFypdf from "./AddFypdf/AddFypdf";

function Admin() {
  if (currentUser.role === "admin") {
    return (
      <div class="container">
        <h1 className="text-center">Welcome, {currentUser?.name} !</h1>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card-body bg-dark text-white">{<AddFypdf />}</div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card-body bg-dark text-white">{<AddSypdf />} </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card-body bg-dark text-white">{<AddTypdf />}</div>
          </div>
        </div>
      </div>
    );
  } 
  else {
    alert("You are not authorized to view this page");
    window.location.href = "/";
  }
}

export default Admin;
