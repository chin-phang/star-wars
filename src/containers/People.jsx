import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import map from 'lodash/map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import * as style from './people.scss';
import { fetchPeople } from '../reducers/actions';

const mapStateToProps = state => ({
  data: state.peopleReducer.data
});

const mapDispatchToProps = {
  fetchPeople
};

export class PeopleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  handlePrevious() {
    this.props.fetchPeople(this.props.data.previous);
  }

  handleNext() {
    this.props.fetchPeople(this.props.data.next);
  }

  render() {
    const results = this.props.data ? this.props.data.results : [];
    return (
      <div className={style.people}>
        <div className={style.previous}>
          <button
            className={style.pageBtn}
            onClick={this.handlePrevious}
            disabled={this.props.data.previous == null}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="5x" />
          </button>
        </div>
        <div className={style.itemContainer}>
          {map(results, (item, key) => (
            <div className={style.item} key={key + 1}>
              <Link to="/people/1">{item.name}</Link>
            </div>
          ))}
        </div>
        <div className={style.next}>
          <button
            className={style.pageBtn}
            onClick={this.handleNext}
            disabled={this.props.data.next == null}
          >
            <FontAwesomeIcon icon={faChevronRight} size="5x" />
          </button>
        </div>
      </div>
    );
  }
}

export const People = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PeopleContainer)
);

PeopleContainer.propTypes = {
  data: PropTypes.object,
  fetchPeople: PropTypes.func
};
