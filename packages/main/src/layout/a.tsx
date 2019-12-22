import React, { Component } from 'react';
import { observer, inject } from 'react-ahax';
import B from './b';

@inject('baseStore')
@observer(['test'])
class a extends Component {
  onEventAction({ payload }) {
    // alert(payload);
  }

  componentDidMount() {
    console.log(this.props.baseStore);
  }

  render() {
    return (
      <div>
        <B></B>
      </div>
    );
  }
}

export default a;
