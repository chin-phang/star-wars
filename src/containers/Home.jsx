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
        <Link className={style.link} to={peopleRoutes.LIST}>
          <FontAwesomeIcon icon={faMale} size="5x" />
          <h4>People</h4>
        </Link>
      </div>
    );
  }
}
