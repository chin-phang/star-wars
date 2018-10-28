import React from 'react';
import { css } from 'emotion';
import { RingLoader } from 'react-spinners';

import * as style from './loading.scss';

const override = css`
  display: block;
  margin: 0 auto;
`;

export class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <div className={style.loading}>
        <RingLoader
          className={override}
          sizeUnit={'px'}
          size={60}
          color={'yellow'}
          loading={this.state.isLoading}
        />
      </div>
    );
  }
}
