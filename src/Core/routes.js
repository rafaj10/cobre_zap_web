import React from 'react';
import { Route } from 'react-router-dom';
import {restoreUserData} from "./localStorage";
import PropTypes from 'prop-types';

AuthenticatedRoute.propTypes = {
  caseAuth: PropTypes.object,
  caseUnauth: PropTypes.any
}

function AuthenticatedRoute({ caseAuth: Component, caseUnauth: Redirect, ...rest }){
    return (
        <Route {...rest} render={() => {
          let user = restoreUserData();
          if (user) {
            return Component;
          } else {
            return Redirect;
          }
        }}/>
        )
}

export default AuthenticatedRoute;