import { toast } from "react-toastify";

export const ToastSuccess = (message) => {
  toast.success(message);
};

export const ToastError = (message) => {
  toast.error(message);
};
