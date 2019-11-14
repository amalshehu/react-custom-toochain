import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
// FYI - Write dev code here...

// Hot module replacement (HMR)
if (module.hot) {
  module.hot.accept()
}
ReactDOM.render(<App />, document.getElementById('root'))
