import React from 'react';
import PublicLayout from './layouts/public/PublicLayout';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Routers from './Router';

const App = () => {
  return (
    <Router  future={{ v7_startTransition: true, v7_relativeSplatPath: true }} >
      <Routers />
    </Router>
    // <div>hello</div>
  );
};

export default App;
