import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.less';
import App from './App';
import {ConfigProvider} from 'antd';
import esES from 'antd/es/locale/es_ES';

ReactDOM.render(
  <React.StrictMode>
      <ConfigProvider locale={esES}>
          <App />
      </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);