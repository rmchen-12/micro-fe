import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'react-ahax';

@inject('baseStore')
@observer(['test'])
export default class List extends Component<any, any> {
  render() {
    console.log('app2store', this.props.baseStore);

    return (
      <div>
        这是APP2
        <button onClick={this.handleChange} style={{ margin: '0px 10px' }}>
          测试Store
        </button>
        <Link to="/app1/detail">详情</Link>
      </div>
    );
  }
}
