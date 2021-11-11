import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DemoContext from './context/demoContext';

ReactDOM.render(
<DemoContext children={<App/>}/>, document.getElementById('root'));