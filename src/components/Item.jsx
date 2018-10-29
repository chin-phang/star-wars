import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import * as style from './item.scss';

export class Item extends React.Component {
  render() {
    let { people } = this.props;
    console.log(people);
    return (
      <div className={style.detailContent}>
        <div className="row">
          <div className="col-md-6 text-center">
            <div>
              <p className={style.label}>Name: </p>
              <p>{people.name}</p>
            </div>
            <div>
              <p className={style.label}>Gender: </p>
              <p>{people.gender}</p>
            </div>
            <div>
              <p className={style.label}>Birth Year: </p>
              <p>{people.birth_year}</p>
            </div>
            <div>
              <p className={style.label}>Height: </p>
              <p>{people.height}</p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div>
              <p className={style.label}>Mass: </p>
              <p>{people.mass}</p>
            </div>
            <div>
              <p className={style.label}>Eye Color: </p>
              <p>{people.eye_color}</p>
            </div>
            <div>
              <p className={style.label}>Hair Color: </p>
              <p>{people.hair_color}</p>
            </div>
            <div>
              <p className={style.label}>Skin Color: </p>
              <p>{people.skin_color}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-center">
            <div>
              <p className={style.label}>Starships: </p>
              {!isEmpty(people.starships)
                ? map(people.starships, (starship, index) => (
                    <p key={index}>{starship.name}</p>
                  ))
                : 'n/a'}
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div>
              <p className={style.label}>Vehicles: </p>
              {!isEmpty(people.vehicles)
                ? map(people.vehicles, (vehicle, index) => (
                    <p key={index}>{vehicle.name}</p>
                  ))
                : 'n/a'}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 text-center">
            <div>
              <p className={style.label}>Species: </p>
              {map(people.species, (species, index) => (
                <p key={index}>{species.name}</p>
              ))}
            </div>
            <div>
              <p className={style.label}>Homeworld: </p>
              <p>{people.homeworld ? people.homeworld.name : 'n/a'}</p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div>
              <p className={style.label}>Films: </p>
              {map(people.films, (film, index) => (
                <p key={index}>{film.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  people: PropTypes.object
};
