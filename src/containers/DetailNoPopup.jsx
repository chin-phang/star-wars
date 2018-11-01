import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as style from './detailNoPopup.scss';
import { Item } from '../components/Item';
import { detailSelector } from '../reducers/selectors';
import { fetchPeopleDetail } from '../reducers/actions';

const mapStateToProps = state => ({
  people: detailSelector(state)
});

const mapDispatchToProps = {
  fetchPeopleDetail
};

export class DetailNoPopupContainer extends React.Component {
  componentDidMount() {
    let { params } = this.props.match;

    this.props.fetchPeopleDetail(`/people/${params.id}`);
  }

  render() {
    let { people } = this.props;

    return (
      <div className={style.detailNoPopup}>
        <Item people={people} />
        <div className={style.goHome}>
          <Link className={style.link} to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export const DetailNoPopup = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailNoPopupContainer)
);

DetailNoPopupContainer.propTypes = {
  people: PropTypes.object,
  fetchPeopleDetail: PropTypes.func,
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
