import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { PATH } from "../constants/path";
import { getLocalAccessToken } from "../utilities/token";
function AuthenticatedGuard(props) {
  const { isAuthenticated, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated && !getLocalAccessToken()) {
          return <Redirect to={PATH.LOGIN} />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

AuthenticatedGuard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedGuard);
