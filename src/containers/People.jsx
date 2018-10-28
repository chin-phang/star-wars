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
import { fetchAllPeople } from '../reducers/actions';
import { Loading } from '../components/Loading';

const mapStateToProps = state => ({
  data: state.peopleReducer.data,
  loading: state.peopleReducer.loading
});

const mapDispatchToProps = {
  fetchAllPeople
};

export class PeopleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPeople('/people');
  }

  handlePrevious() {
    const { previous } = this.props.data;
    const url = previous.substr(previous.indexOf('/people'));
    this.props.fetchAllPeople(url);
  }

  handleNext() {
    const { next } = this.props.data;
    const url = next.substr(next.indexOf('/people'));

    this.props.fetchAllPeople(url);
  }

  renderDetail(obj) {
    const url = obj.url.substr(obj.url.indexOf('people/'));
    const id = url.split('/')[1];

    return (
      <div className={style.item} key={id}>
        <Link to={`/people/${id}`}>{obj.name}</Link>
      </div>
    );
  }

  render() {
    const results = this.props.data ? this.props.data.results : [];
    return (
      <div>
        <h1 className={style.heading}>All the People in the Universe</h1>
        <div className={style.people}>
          {this.props.loading && <Loading />}
          {!this.props.loading && (
            <React.Fragment>
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
                {map(results, item => this.renderDetail(item))}
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
            </React.Fragment>
          )}
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
  loading: PropTypes.bool,
  fetchAllPeople: PropTypes.func
};
