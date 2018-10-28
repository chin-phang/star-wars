import React from 'react';
import PropTypes from 'prop-types';

import * as style from './item.scss';

export class Item extends React.Component {
  render() {
    let { people } = this.props;

    return (
      <div className={style.detailContent}>
        <p>
          <span className={style.label}>Name: </span>
          {people.name}
        </p>
        <p>
          <span className={style.label}>Gender: </span>
          {people.gender}
        </p>
        <p>
          <span className={style.label}>Birth Year: </span>
          {people.birth_year}
        </p>
        <p>
          <span className={style.label}>Height: </span>
          {people.height}
        </p>
        <p>
          <span className={style.label}>Mass: </span>
          {people.mass}
        </p>
        <p>
          <span className={style.label}>Eye Color: </span>
          {people.eye_color}
        </p>
        <p>
          <span className={style.label}>Hair Color: </span>
          {people.hair_color}
        </p>
        <p>
          <span className={style.label}>Skin Color: </span>
          {people.skin_color}
        </p>
      </div>
    );
  }
}

Item.propTypes = {
  people: PropTypes.object
};
