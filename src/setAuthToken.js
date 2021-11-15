import axios from "axios";

const SetAuthToken = () => {
   const token = localStorage.getItem("token");
   let authenicated = false;
    if(token){
     authenicated = true;
    }
    return authenicated;
};

export default SetAuthToken;
