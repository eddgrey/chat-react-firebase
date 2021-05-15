import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { UserProvaider } from './context/user';


ReactDOM.render(
  <React.StrictMode>
    <UserProvaider>
      <App/>
    </UserProvaider>
  </React.StrictMode>,
  document.getElementById('root')
);
