import Swal from "sweetalert2";
import { useRouter } from "vue-router";

export function showSuccessAlert(msg, router = null, redirectTo = null) {
  Swal.fire({
    title: "Berhasil!",
    text: msg,
    icon: "success",
    timer: 1500,
    timerProgressBar: true,
    showConfirmButton: false,
    willClose: () => {
      if (redirectTo) {
        router.push({ name: redirectTo });
      }
    },
  });
}

export function showErrorAlert(msg) {
  Swal.fire({
    title: "Gagal!",
    text: msg,
    icon: "error",
    timer: 1500,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}

export async function showConfirmDeleteAlert() {
  return await Swal.fire({
    title: "Yakin ingin menghapus?",
    text: "Data yang dihapus tidak bisa dikembalikan.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  });
}
