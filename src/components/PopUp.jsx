import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import cx from 'classnames';

import * as style from './popup.scss';
import { isPseudoElement } from 'postcss-selector-parser';

export class Popup extends React.Component {
  handleToggle() {
    this.props.togglePopup();
  }

  render() {
    return (
      <Modal
        className={cx(`${style.popup}`, this.props.className)}
        isOpen={this.props.isOpen}
        toggle={this.handleToggle}
      >
        <ModalHeader>Detail</ModalHeader>
        <ModalBody>{this.props.children}</ModalBody>
      </Modal>
    );
  }
}

Popup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  togglePopup: PropTypes.func
};
