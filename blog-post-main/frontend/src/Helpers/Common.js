import { toast } from "react-toastify";

export const errorAlertBox = (error) => {
  const { statusCode, msg } = error;

  if (statusCode === 400) {
    toast.warning(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3500,
      theme: "colored",
    });
  } else {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3500,
      theme: "colored",
    });
  }
}

export const successAlertBox = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3500,
    theme: "colored",
  });
}