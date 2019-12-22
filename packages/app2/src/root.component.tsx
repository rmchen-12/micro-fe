import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import { observer, Provider, inject } from 'react-ahax';

const Detail = loadable({
  loading: () => <div></div>,
  loader: () => import(/* webpackChunkName: "detail"*/ './detail')
});
const List = loadable({
  loading: () => <div></div>,
  loader: () => import(/* webpackChunkName: "list"*/ './list')
});

@observer(['test'])
export default class App2 extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  onEventAction({ payload }) {
    console.log('app2', payload);
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <Provider baseStore={window.store}>
        <Router>
          <Switch>
            <Route exact path="/app2" render={() => <List />} />
            <Route exact path="/app2/detail" render={() => <Detail />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
