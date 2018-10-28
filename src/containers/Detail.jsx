import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchDetail } from '../reducers/actions';
import { Popup } from '../components/Popup';

const mapStateToProps = state => ({
  data: state.detailReducer.data
});

const mapDispatchToProps = {
  fetchDetail
};

export class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popupOpen: true
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchDetail('/people/1');
  }

  toggle() {
    this.setState({
      popupOpen: !this.state.popupOpen
    });
  }

  render() {
    return (
      <Popup isOpen={this.state.popupOpen} togglePopup={this.toggle}>
        <div>
          <p>{this.props.data.name}</p>
        </div>
      </Popup>
    );
  }
}

export const Detail = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DetailContainer)
);

DetailContainer.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  fetchDetail: PropTypes.func,
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};
