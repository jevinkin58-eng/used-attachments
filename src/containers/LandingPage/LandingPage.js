import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import CustomLandingPage from './CustomLandingPage';

export const LandingPageComponent = props => {
  return <CustomLandingPage {...props} />;
};

const mapStateToProps = state => {
  const { pageAssetsData, inProgress, error } = state.hostedAssets || {};
  return { pageAssetsData, inProgress, error };
};

const LandingPage = compose(
  connect(mapStateToProps)
)(LandingPageComponent);

export default LandingPage;
