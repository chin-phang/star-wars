import React from 'react';
import PropTypes from 'prop-types';

export class Detail extends React.Component {
  render() {
    return <div>{this.props.people && this.props.people.name}</div>;
  }
}

Detail.propTypes = {
  people: PropTypes.object
};
