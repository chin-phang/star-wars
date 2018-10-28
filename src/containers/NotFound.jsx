import React from 'react';
import { Link } from 'react-router-dom';

import * as style from './notFound.scss';

const robot = require('../assets/robot.png');

export class NotFound extends React.Component {
  render() {
    return (
      <div className={style.notFound}>
        <div className={style.left}>
          <h1>ERROR 404</h1>
          <p>Sorry, Page Not Found</p>
          <Link className={style.link} to={'/'}>
            Home
          </Link>
        </div>
        <div className={style.right}>
          <img className={style.robot} src={robot} />
        </div>
      </div>
    );
  }
}
