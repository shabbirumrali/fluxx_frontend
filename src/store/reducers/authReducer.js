import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import isEmpty from "lodash/isEmpty";
const initialState = {
  token: null,
  error: null,
  loading: false,
  authRedirectPath: "/members",
  user: {},
  isAuthenticated: false,
};
const authStart = (state, action) => {
   return updateObject(state, { error: null, loading: true });
};
const charterList = (state,action) =>{
   return updateObject(state, {data:action.data,loading:false });
}
const lockAccount = (state,action) =>{
   return updateObject(state, {data:action.data,loading:false });
}
const changeEmail = (state,action) =>{
   return updateObject(state, {data:action.data,loading:false });
}
const catList = (state,action) =>{
   return updateObject(state, {newdata:action.data,loading:false,isAuthenticated:true});
}
const postList = (state,action) =>{  
   return updateObject(state, {postdata:action.data,loading:false});
}
const folderList = (state,action) =>{     
    return updateObject(state, {folderdata:action.data,loading:false});
}
const userList =(state,action) =>{
   return updateObject(state, {userlistdata:action.data,loading:false});
}
const renameList  =(state,action) => {
    return updateObject(state, {renamedata:action.data,loading:false});
}
const postDetail =(state,action) => {
    return updateObject(state, {postdetail:action.data,loading:false});
}
const categorypostDetail =(state,action) =>{
  return updateObject(state, {categorypostdetail:action.data,loading:false});
}
const categoryotherpostDetail =(state,action) =>{
  return updateObject(state, {categoryotherpostDetail:action.data,loading:false});
}
const forgetpasswordmsgdetail =(state,action) =>{
  return updateObject(state, {forgetpasswordmsgdetail:action.data,loading:false});
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false

  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
  console.log(action.type);


  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state,action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.SET_CURRENT_USER:
      return { isAuthenticated: !isEmpty(action.user), user: action.user };
    case actionTypes.CHARTERLIST:
      return charterList(state,action);
    case actionTypes.LOCKACCOUNT:
      return lockAccount(state,action);
    case actionTypes.CHANGEEMAIL:
      return changeEmail(state,action); 
    case actionTypes.CATEGORYLIST:
      return catList(state,action);  
    case actionTypes.POSTLIST:
      return  postList(state,action); 
    case actionTypes.FOLDERLIST:
      return folderList(state,action);
    case actionTypes.RENAMELIST:
      return renameList(state,action);  
    case actionTypes.SINGLEPOST:
      return postDetail(state,action); 
    case actionTypes.CATEGORYPOST:
      return categorypostDetail(state,action); 
    case actionTypes.OTHERCATEGORYPOST:
      return categoryotherpostDetail(state,action);   
    case actionTypes.FETCHUSERLIST:
      return userList(state,action); 
    case actionTypes.FORGETPASSWORD:
      return forgetpasswordmsgdetail(state,action); 
    default:
      return state;
  }
};

export default reducer;
