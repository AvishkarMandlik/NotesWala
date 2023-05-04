import Swal from 'sweetalert2';

import { currentUser } from "./currentUser";

export async function notadmin() {
  if (currentUser?.role === "user") {
    await Swal.fire({
      title : `Sorry ${currentUser.name}`,
      text: "You don't have permission to access this page",
      icon: "warning",
      confirmButtonColor: '#3085d6',
      buttons: true,
      dangerMode: true,
    });
    window.location.href = "/";
  }
}