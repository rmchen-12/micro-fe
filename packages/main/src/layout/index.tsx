import React, { Component } from 'react';
import { inject, observer } from 'react-ahax';
import A from './a';

@observer(['test'])
export default class Layout extends Component<any, any> {
  render() {
    return (
      <div id="content-wrap">
        Main App
        <div>
          <button onClick={this.change}>Store测试 count</button>
        </div>
        <div></div>
        <a style={{ marginLeft: 20 }} href="#/app1">
          app1
        </a>
        <a style={{ marginLeft: 20 }} href="#/app1/detail">
          app1/detail
        </a>
        <a style={{ marginLeft: 20 }} href="#/app2">
          app2
        </a>
        <a style={{ marginLeft: 20 }} href="#/app2/detail">
          app2/detail
        </a>
        <A></A>
        <div id="sub-module-wrap"></div>
      </div>
    );
  }

  change = () => {
    this.dispatch({
      type: 'test',
      payload: { a: 123 }
    });
  };
}
