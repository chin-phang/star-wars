import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchDetail } from '../reducers/actions';

const mapStateToProps = state => ({
  data: state.detailReducer.data
});

const mapDispatchToProps = {
  fetchDetail
};

export class DetailContainer extends React.Component {
  componentDidMount() {
    this.props.fetchDetail('/people/1');
  }

  render() {
    return <div>Detail</div>;
  }
}

export const Detail = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailContainer)
);

DetailContainer.propTypes = {
  data: PropTypes.object,
  fetchDetail: PropTypes.func
};
