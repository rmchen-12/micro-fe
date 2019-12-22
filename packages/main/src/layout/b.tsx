import React, { Component } from 'react';
import { inject, observer } from 'react-ahax';

@observer(['test'])
class b extends Component {
  onEventAction({ payload }) {}

  render() {
    return <div>adf</div>;
  }
}

export default b;
