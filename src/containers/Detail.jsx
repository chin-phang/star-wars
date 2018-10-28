import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import map from 'lodash/map';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import * as style from './detail.scss';
import { Item } from '../components/Item';

const mapStateToProps = state => ({
  results: state.peopleReducer.data.results || {}
});

export class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    this.back = this.back.bind(this);
  }

  componentDidMount() {
    const url = window.location.href.substr(
      window.location.href.indexOf('people')
    );

    map(this.props.results, (people, index) => {
      if (people.url === `https://swapi.co/api/${url}/`) {
        this.setState({
          activeIndex: index
        });
      }
    });
  }

  back(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    let { results } = this.props;

    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === results.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    let { results } = this.props;

    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? results.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    let { results } = this.props;
    const { activeIndex } = this.state;
    const indicators = map(results, item => {
      let url = item.url.substr(item.url.indexOf('people/'));
      let id = url.split('/')[1];

      return Object.assign(item, { key: id });
    });

    const slides = map(results, item => {
      let url = item.url.substr(item.url.indexOf('people/'));
      let id = url.split('/')[1];

      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={id}
        >
          <Item people={item} />
        </CarouselItem>
      );
    });

    return (
      <div className={style.detail}>
        <div className={style.closeBtn} onClick={this.back}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>

        <div className={style.popup}>
          <h3 className={style.heading}>Detail</h3>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={indicators}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </div>
      </div>
    );
  }
}

export const Detail = withRouter(connect(mapStateToProps)(DetailContainer));

DetailContainer.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  fetchDetail: PropTypes.func,
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
