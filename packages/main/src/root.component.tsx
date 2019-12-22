import './style.less';
import React, { Component } from 'react';
import { Provider, observer } from 'react-ahax';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
// import store from './store';
import Layout from './layout';

// @observer(['test'])
export default class Main extends Component<any, any> {
  state = {
    store: 123
  };

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { store } = this.state;
    window.store = store;

    return (
      <Provider baseStore={store}>
        <Layout />
      </Provider>
    );
  }
}
