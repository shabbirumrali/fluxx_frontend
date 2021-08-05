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
const projectList = (state,action) =>{
   return updateObject(state, {data:action.data,loading:false });
}
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
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
    case actionTypes.PROJECTLIST:
      return projectList(state,action);  
    default:
      return state;
  }
};

export default reducer;
