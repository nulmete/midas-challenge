import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 90%;
  padding: 2rem 0;
`;

const App = () => (
  <Router>
    <AppStyles>
      <Header />
      <Body />
    </AppStyles>
  </Router>
);

export default App;
