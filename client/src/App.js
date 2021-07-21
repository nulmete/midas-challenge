import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Routes from './components/Routes/Routes';

const App = () => (
  <Router>
    <Nav />
    <main>
      <Routes />
    </main>
  </Router>
);

export default App;
