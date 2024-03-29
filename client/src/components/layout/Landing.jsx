import React from "react";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";

function Landing({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a Developer profile/porfolio, share posts and get help from
            our community
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

Landing.protoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Landing);
