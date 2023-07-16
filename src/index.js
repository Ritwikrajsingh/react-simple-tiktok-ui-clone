import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept()
}
