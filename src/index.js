import React from 'react';
import ReactDOM from 'react-dom';

// FYI - Write dev code here...

const { useState } = React;
console.log('Helo worldxx', useState);
ReactDOM.render(
  <div>
    hello worlds <button>click me</button>
  </div>,
  document.getElementById('root')
);
