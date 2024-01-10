// utils/sweetAlert.js
import Swal from "sweetalert2";

const showSweetAlert = (title, icon) => {
  Swal.fire({
    title: title || "Custom Alert!",
    text: false,
    icon: icon || "success",
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "bg-blue-500 hover:bg-blue-600",
      title: "text-gray-500",
    },
    allowOutsideClick: false, // Disable clicking outside the modal
    timer: 1850, // Auto-hide after 5000 milliseconds (5 seconds)
    showConfirmButton: false, // Hide the "OK" button
  });
};

const showLoadingSweetAlert = () => {
  Swal.fire({
    title: "loading...",
    html: false,
    icon: false,
    allowOutsideClick: false,
    showCancelButton: false,
    cancelButtonText: "Cancel",
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
      // Simulate an asynchronous task (replace this with your actual task)
    },
  });
};
const closeLoadingSweetAlert = () => {
  Swal.close();
};

export { showSweetAlert, showLoadingSweetAlert, closeLoadingSweetAlert };
