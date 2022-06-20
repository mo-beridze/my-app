import ReactDOM from "react-dom/client";
import React from "react";
import App from './App';
import './index.css';


const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// import App from './App';
// import reportWebVitals from './reportWebVitals';


 


root.render(<React.StrictMode>
  <App />
  </React.StrictMode>);