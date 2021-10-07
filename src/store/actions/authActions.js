import APIUtil from "../../api";
import * as actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import history from "../../history";
import axios from "axios";
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
export const charterList  = (data) => {
  //console.log(data);
  return {
    type: actionTypes.CHARTERLIST,
    data: data,
  };

}
export const lockAccount = (data) => {
  return {
    type: actionTypes.LOCKACCOUNT,
    data: data,
  };
}
export const changeEmail = (data) => {
  return {
    type: actionTypes.CHANGEEMAIL,
    data: data,
  };
}
export const fetchprojectlist = (data) => {
  return {
    type: actionTypes.PROJECTLIST,
    data: data,
  };
}
export const categorylist = (data) => {
  return {
    type: actionTypes.CATEGORYLIST,
    data: data,
  };
}
export const postlist = (data) => {
  return {
    type: actionTypes.POSTLIST,
    data: data,
  };
}
export const singlepostdetail = (data) =>{
    return {
      type: actionTypes.SINGLEPOST,
      data: data,
    };
}
export const categorypost = (data) =>{
    return {
      type: actionTypes.CATEGORYPOST,
      data: data,
    };

}
export const folderlist = (data) => {
  return {
    type: actionTypes.FOLDERLIST,
    data: data,
  };
}
export const renamelist = (data) => {
  return {
       type: actionTypes.RENAMELIST,
       data:data
  };

}

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
          localStorage.setItem("subscribeUser", response.data.user.subscribe);
          dispatch(authSuccess(response.data));
          toast.success(response.data.message);
          //history.push("/members");
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
          toast.success("Account creation successful.");
          history.push({
            pathname: "/",
            state: { loginopen: true}
          });
          window.location.href = "/";
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
          //toast.success("Thank you for contacting us. We will respond shortly.");
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
export const createfolder = (form, props) => {

  let dataobject = {
        "categoryname":form.foldername
  }
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  };  
  return (dispatch) => {
    api
      .post("createCategory",dataobject, config)
      .then((response) => {
        if (response.data.status === 200) {
           toast.success("Folder creation successful");
              dispatch(categoryList());
           
           //history.push("/members");
            //dispatch(categList(response.data));
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};
export const createcharter = (form, props) => {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  };  
  return (dispatch) => {
    api
      .post("createCharter",form, config)
      .then((response) => {
        if (response.data.status === 200) {

          // toast.success("Your charter create Successfully");
          /// history.push("/members");
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};
export const charterlist = (form, props) => {
  
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  };  
  return (dispatch) => {
    api
      .get("charterlist", config)
      .then((response) => {
        //console.log(response.data);
        //if (response.data.status === 200) {
           dispatch(charterList(response.data));
       /// }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};

export const renamecharter = (form, props) => {
  let dataobject = {
        "newchartername":form.newchartername,
        "charterid":props
  }
  console.log(dataobject);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  };  
  return (dispatch) => {
    api
      .post("renamecharter",dataobject, config)
      .then((response) => {
            dispatch(charterlist()); 
            response.data.renameList = 'sucessdata';
            toast.success("Rename successful");
            history.push("/members");
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};
export const deleteCharter = (form, props) => {
  let dataobject = {
        "charterid":props
  }
  console.log(dataobject);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  };  
  console.log(config);
  return (dispatch) => {
    api
      .post("deleteCharter",dataobject, config)
      .then((response) => {
        if (response.data.status === 200) {
           toast.success("Deletion successful.");
           dispatch(charterlist()); 
           history.push("/members");
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};

//lock Account
export const lockaccount = (form, props) => {
  let dataobject = {
        "password":form.password
  }
    const config = {
           headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
                      'Content-Type': 'application/json'
                     }
          };  
 
  return (dispatch) => {
    api
      .post("lockAccount",dataobject, config)
      .then((response) => { 
        response.data.lockAccount = 'success';       
        dispatch(lockAccount(response.data));
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};

// change Email 
export const changeemail = (form, props) => {
  let dataobject = {
        "email":form.emailfirst,
        "password":form.passwordfirst
  }
    const config = {
           headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
                      'Content-Type': 'application/json'
                     }
          };
  return (dispatch) => {
    api
      .post("changeEmail",dataobject, config)
      .then((response) => {
         response.data.changeEmail = 'success';        
        dispatch(changeEmail(response.data));
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};

// change Email 
export const moveCharter = (form, props) => {
  let dataobject;
  if(form.selectCat == "uncategorized"){
               dataobject = {
                   "categoryId":form.selectCat,
                   "projectId":props.projectId,
                   "projectname":props.projectname,
                   "currentCategory":props.categoryId,
                   "movefromcat":props.id
              }

  }else{ 
         if(props.projectId == undefined){
             props.projectId = props.id; 
         }
        dataobject = {
           "categoryId":form.selectCat,
           "projectId": props.projectId,
           "projectname":props.name ? props.name: props.projectname,
           "movefromcat":props.id 
          }

  }
  
  
    const config = {
           headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,
                      'Content-Type': 'application/json'
                     }
          };
  return (dispatch) => {
    api
      .post("updateCharterCategory",dataobject, config)
      .then((response) => {
          if (response.data.status === 200) {
             toast.success("Move successful.");
             
             dispatch(charterlist()); 
             history.push("/members");
          }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};

export const fetchcategoryProjects = (form, props) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
    };  
    return (dispatch) => {
      api
        .get("fetchcategoryprojects/"+form, config)
        .then((response) => {
            dispatch(fetchprojectlist(response.data));        
        })
        .catch((err) => {
          if (err === "Error: Request failed with status code 500") {
            toast.error(" Token Expire !!");
          }
        });
    };
};

export const categoryList = (form, props) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
    };  
    return (dispatch) => {
      api
        .get("fetchcategory", config)
        .then((response) => {
            dispatch(categorylist(response.data));        
        })
        .catch((err) => {
          if (err === "Error: Request failed with status code 500") {
            toast.error(" Token Expire !!");
          }
        });
    };
};
export const fetchPosts = (form,props) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
    };  
    return (dispatch) => {
      axios
        .get("http://fluxxcharter.com/v1/wordpress_blog/wp-json/wp/v2/posts?per_page=100&_embed",config)
        .then((response) => {
             console.log(response.data);
            dispatch(postlist(response.data));        
        })
        .catch((err) => {
          if (err === "Error: Request failed with status code 500") {
            toast.error(" Token Expire !!");
          }
        });
    };
};
export const fetchsinglepost = (form,props) => {
  const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
    };
    return (dispatch) => {
      axios
        .get("http://fluxxcharter.com/v1/wordpress_blog/wp-json/wp/v2/posts/"+form+"?&_embed",config)
        .then((response) => {
             console.log(response.data);
             dispatch(singlepostdetail(response.data));        
        })
        .catch((err) => {
          if (err === "Error: Request failed with status code 500") {
            toast.error(" Token Expire !!");
          }
        });
    };
};

export const deleteFolder = (form, props) => {
  let dataobject = {
        "folderid":props
  }
  const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  };  
  return (dispatch) => {
    api
      .post("deletefolder",dataobject, config)
      .then((response) => {
        if (response.data.status === 200) {
           toast.success("Deletion successful.");       
           history.push("/members");
           dispatch(categoryList());
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};
export const renameFolder = (form, props) => {
  let dataobject = {
        "folderid":form.folderId,
        "newfoldername":form.newfoldername
  }
  const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  };  
  return (dispatch) => {
    api
      .post("renamefolder",dataobject, config)
      .then((response) => {
        if (response.data.status === 200) {
           toast.success("Rename successful");          
           dispatch(categoryList());
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};

export const updatepassword = (form, props) => {
  
  let dataobject = {
        "oldpassword":form.oldpassword,
        "newpassword":form.newpassword,
  }
  const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
  }; 
  
  return (dispatch) => {
    api
      .post("updatepassword", dataobject,config)
      .then((response) => {
        if (response.data.status === 200) {
          toast.success("Your password is successfully updated");
          history.push("/setting");
        }
      })
      .catch((err) => {
        if (err === "Error: Request failed with status code 500") {
          toast.error(" Token Expire !!");
        }
      });
  };
};


export const fetchcategoryposts = (form,props) => {
  const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json', }
    };
    return (dispatch) => {
      axios
        .get("http://fluxxcharter.com/v1/wordpress_blog/wp-json/wp/v2/posts?category_slug=deal",config)
        .then((response) => {
             console.log(response.data);
             dispatch(categorypost(response.data));        
        })
        .catch((err) => {
          if (err === "Error: Request failed with status code 500") {
            toast.error(" Token Expire !!");
          }
        });
    };
};






