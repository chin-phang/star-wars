import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as style from './detail.scss';
import { fetchDetail } from '../reducers/actions';

const mapStateToProps = state => ({
  data: state.detailReducer.data
});

const mapDispatchToProps = {
  fetchDetail
};

export class DetailContainer extends React.Component {
  componentDidMount() {
    const url = window.location.href.substr(
      window.location.href.indexOf('/people')
    );

    this.props.fetchDetail(url);
  }

  render() {
    return (
      <div className={style.detail}>
        <div className={style.popup}>
          <p>{this.props.data.name}</p>
        </div>
      </div>
    );
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
  loading: PropTypes.bool,
  fetchDetail: PropTypes.func,
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
