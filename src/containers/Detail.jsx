import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import * as style from './detail.scss';
import { fetchDetail } from '../reducers/actions';
import { Loading } from '../components/Loading';

const mapStateToProps = state => ({
  data: state.detailReducer.data || {},
  loading: state.detailReducer.loading
});

const mapDispatchToProps = {
  fetchDetail
};

export class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  componentDidMount() {
    const url = window.location.href.substr(
      window.location.href.indexOf('/people')
    );

    this.props.fetchDetail(url);
  }

  back(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  render() {
    let { data } = this.props;

    return (
      <div className={style.detail} onClick={this.back}>
        <div className={style.popup}>
          <h3 className={style.heading}>Detail</h3>

          {this.props.loading && <Loading />}

          {!this.props.loading &&
            data && (
              <div className={style.detailContent}>
                <p>{data.name}</p>
                <p>{data.gender}</p>
                <p>{data.birth_year}</p>
                <p>{data.height}</p>
                <p>{data.mass}</p>
                <p>{data.eye_color}</p>
                <p>{data.hair_color}</p>
                <p>{data.skin_color}</p>
              </div>
            )}
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
