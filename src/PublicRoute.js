import {
    Route,
    Redirect
  } from 'react-router-dom';
  import SetAuthToken from './setAuthToken';
  const isAuthenticated =  SetAuthToken();
  function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            !isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/home',
                  state: { from: location }
                }}
              />
            ))
        }
      />
    );
  }
  
  export default PublicRoute;