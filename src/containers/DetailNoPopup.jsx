import React from 'react';

import { Item } from '../components/Item';
import { peopleSelector } from '../reducers/selectors';

export class DetailNoPopup extends React.Component {
  render() {
    return (
      <div>
        <Item people={peopleSelector} />
      </div>
    );
  }
}
