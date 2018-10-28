import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import cx from 'classnames';

import * as style from './popUp.scss';
import { isPseudoElement } from 'postcss-selector-parser';

export class PopUp extends React.Component {
  handleToggle() {
    this.props.togglePopUp();
  }

  render() {
    return (
      <Modal
        className={cx(`${style.popUp}`, this.props.className)}
        isOpen={this.props.isOpen}
        toggle={this.handleToggle}
      >
        <ModalHeader>Detail</ModalHeader>
        <ModalBody>{this.props.children}</ModalBody>
      </Modal>
    );
  }
}

PopUp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  togglePopUp: PropTypes.func
};
