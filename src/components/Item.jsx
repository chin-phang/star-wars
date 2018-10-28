import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import * as style from './item.scss';

export class Item extends React.Component {
  render() {
    let { people } = this.props;

    return (
      <div className={style.detailContent}>
        <div className="row">
          <div className="col-md-6 text-center">
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
          </div>
          <div className="col-md-6 text-center">
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
        </div>

        <div className="row">
          <div className="col-md-6 text-center">
            <p>
              <span className={style.label}>Starships: </span>
              {!isEmpty(people.starships)
                ? map(people.starships, starship => <p>{starship.name}</p>)
                : 'n/a'}
            </p>
          </div>

          <div className="col-md-6 text-center">
            <p>
              <span className={style.label}>Vehicles: </span>
              {!isEmpty(people.vehicles)
                ? map(people.vehicles, vehicle => <p>{vehicle.name}</p>)
                : 'n/a'}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-center">
            <p>
              <span className={style.label}>Species: </span>
              {map(people.species, species => (
                <p>{species.name}</p>
              ))}
            </p>
            <p>
              <span className={style.label}>Homeworld: </span>
              {homeworld.name}
            </p>
          </div>

          <div className="col-md-6 text-center">
            <p>
              <span className={style.label}>Films: </span>
              {map(people.films, film => (
                <p>{film.name}</p>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  people: PropTypes.object
};
