import React from 'react';
import PublicLayout from './layouts/public/PublicLayout';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Routers from './Router';

const App = () => {
  return (
    <Router basename="/projects">
      <Routers />
    </Router>
  );
};

export default App;
