// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Router from './Router';
// import './src/index.css'; // or wherever your global CSS import is

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);