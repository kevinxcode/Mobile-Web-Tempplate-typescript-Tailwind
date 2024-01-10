import Swal from 'sweetalert2';

const ConfirmDialog = async (title, text) => {
  const result = await Swal.fire({
    title: title || 'Are you sure?',
    text: text || 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    reverseButtons: false,
    allowOutsideClick: false,
  });

  return result.isConfirmed;
};

export default ConfirmDialog;
