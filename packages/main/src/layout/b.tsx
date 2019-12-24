import React, { Component } from 'react';
import { inject, observer } from 'react-ahax';
import Ha from 'components';

@observer(['test'])
class b extends Component {
  onEventAction({ payload }) {}

  render() {
    return (
      <div>
        b<Ha></Ha>
      </div>
    );
  }
}

export default b;
