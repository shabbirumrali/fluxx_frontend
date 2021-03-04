import APIUtil from "../../api";
import * as actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import history from "../../history";

const api = new APIUtil();

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (form) => {
  return (dispatch) => {
    dispatch(authStart());
    api
      .post("login", form)
      .then((response) => {
        if (response.data.status === 422) {
          toast.error(response.data.message);
        } else {
          localStorage.setItem("token", response.data.user.token);
          localStorage.setItem("role", response.data.user.role);
          localStorage.setItem("email", response.data.user.email);
          dispatch(authSuccess(response.data));
          toast.success(response.data.message);
        }
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const setCurrentUser = (user) => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    user,
  };
};

export const createForm = (form, props) => {
  return (dispatch) => {
    api
      .post("register", form)
      .then((response) => {
        if (response.statusText === "OK") {
          toast.success("You have SucessFul Registred");
          history.push("/login");
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Your Email is Already Exist !!");
        }
      });
  };
};
export const forgetpassword = (form, props) => {
  console.log(form);
  return (dispatch) => {
    api
      .post("forgot_password", form)
      .then((response) => {
        if (response.data.status === 200) {
          toast.success("Check Email to reset password");
          history.push("/login");
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Your Email is Already Exist !!");
        }
      });
  };
};

export const resetpassword = (form, props) => {
  
  let dataobject = {

        "password":form.password,
        "confirmPassword":form.resetpassword,
        "reset_token":props
  }
  
  return (dispatch) => {
    api
      .post("reset_password", dataobject)
      .then((response) => {
        if (response.data.status === 200) {
          toast.success("Your password is successfully updated");
          history.push("/");
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};

export const contactus = (form, props) => {
  
  
  
  return (dispatch) => {
    api
      .post("contactus", form)
      .then((response) => {
        if (response.data.status === 200) {
          toast.success("Thank you for submitting the contact.We will contact you shortly");
          history.push("/contactus");
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};
