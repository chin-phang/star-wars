import React from 'react';
import { Link } from 'react-router-dom';

import * as style from './home.scss';
import { peopleRoutes } from './routes';
import { Background } from '../components/Background';
import { FancyButton } from '../components/FancyButton';

export class Home extends React.Component {
  render() {
    return (
      <div className={style.home}>
        <Background />
        <Link className={style.link} to={peopleRoutes.LIST}>
          <FancyButton>Begin</FancyButton>
        </Link>
      </div>
    );
  }
}
