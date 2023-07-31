// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Main() {
  return (
    <div>
      <h1>Google Auth Example</h1>
      <App />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
