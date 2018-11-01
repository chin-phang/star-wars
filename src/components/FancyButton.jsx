import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import * as style from './fancyButton.scss';

export class FancyButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    if (this.props.onClick && !this.props.disabled) {
      this.props.onClick(e);
    }
  }

  render() {
    let { type = 'button', className, ...otherProps } = this.props;

    return (
      <button
        type={type}
        className={`${style.fancyBtn} ${className || ''} ${
          this.props.disabled ? style.disabled : ''
        } d-flex justify-content-between`}
        {...otherProps}
        onClick={this.handleOnClick}
      >
        <FontAwesomeIcon
          className={style.arrow}
          icon={faAngleRight}
          size="2x"
        />
        <FontAwesomeIcon
          className={style.arrow}
          icon={faAngleRight}
          size="2x"
        />
        <FontAwesomeIcon
          className={style.arrow}
          icon={faAngleRight}
          size="2x"
        />
        <h3 className={style.text}>{this.props.children}</h3>
        <FontAwesomeIcon className={style.arrow} icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className={style.arrow} icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className={style.arrow} icon={faAngleLeft} size="2x" />
      </button>
    );
  }
}

FancyButton.propTypes = {
  handleOnClick: PropTypes.func,
  disabled: PropTypes.bool
};
