import {
    Route,
    Redirect
  } from 'react-router-dom';
  import SetAuthToken from './setAuthToken';
  const isAuthenticated =  SetAuthToken();
  function PrivateRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticated
              ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/',
                    state: { from: location }
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;