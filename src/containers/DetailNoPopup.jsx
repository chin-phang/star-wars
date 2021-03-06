import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounceRender from 'react-debounce-render';

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
    return (
      <div className={style.detailNoPopup}>
        <h3 className={style.heading}>Detail</h3>
        <Item people={this.props.people} />
        <div className={style.goHome}>
          <Link className={style.link} to="/">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

const debouncedDetailNoPopupContainer = debounceRender(
  DetailNoPopupContainer,
  3000
);

export const DetailNoPopup = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(debouncedDetailNoPopupContainer)
);

DetailNoPopupContainer.propTypes = {
  people: PropTypes.object,
  fetchPeopleDetail: PropTypes.func,
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
