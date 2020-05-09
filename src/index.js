import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MultiStep from "./MultiStep";

function App() {

  return (
    <div>
      <div>
        <h1> Multi-Step Form Using React Hooks </h1>
        <MultiStep />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));