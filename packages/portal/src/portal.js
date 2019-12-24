import * as singleSpa from 'single-spa';
import { loadApp } from './helper';

const project_config = [
  {
    isBase: true,
    name: 'main',
    version: '1.0.0',
    hashPrefix: '',
    entry: 'http://localhost:9001/singleSpaEntry.js',
    store: 'http://localhost:9001/store.js'
  }
];

async function init() {
  const loadingPromises = [];

  // main模块
  loadingPromises.push(
    loadApp('main', '', '@portal/main', 'http://localhost:9001/store.js')
  );

  loadingPromises.push(
    loadApp(
      'app1',
      '/app1',
      'http://localhost:9002/singleSpaEntry.js',
      'http://localhost:9001/store.js'
    )
  );

  loadingPromises.push(
    loadApp(
      'app2',
      '/app2',
      'http://localhost:9003/singleSpaEntry.js',
      'http://localhost:9001/store.js'
    )
  );

  await SystemJS.import('components');
  await Promise.all(loadingPromises);

  singleSpa.start();
}

init();
