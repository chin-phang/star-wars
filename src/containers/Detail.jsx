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
import { constructId } from '../utils/helpers';
import { resultsSelector } from '../reducers/selectors';

const mapStateToProps = state => ({
  results: resultsSelector(state)
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
    let { params } = this.props.match;

    map(this.props.results, (people, index) => {
      if (people.url === `https://swapi.co/api/people/${params.id}/`) {
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
      let id = constructId(item.url, 'people/');

      return Object.assign(item, { key: id });
    });

    const slides = map(results, item => {
      let id = constructId(item.url, 'people/');

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
            interval={false}
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
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
