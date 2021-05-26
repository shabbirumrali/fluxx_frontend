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
    default:
      return state;
  }
};

export default reducer;
