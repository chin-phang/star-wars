import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';

import * as style from './home.scss';
import { peopleRoutes } from './routes';

const logo = require('../assets/logo.png');

export class Home extends React.Component {
  render() {
    return (
      <div className={style.home}>
        <img className={style.logo} src={logo} />
        <div className={style.link}>
          <Link to={peopleRoutes.PEOPLE}>
            <FontAwesomeIcon icon={faMale} size="5x" />
            <h4>People</h4>
          </Link>
        </div>
      </div>
    );
  }
}
