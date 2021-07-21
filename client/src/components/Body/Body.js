import React from 'react';
import Nav from '../Nav/Nav';
import Routes from '../Routes/Routes';
import BodyStyles from './BodyStyles';

const Body = () => (
  <BodyStyles>
    <Nav />
    <main>
      <Routes />
    </main>
  </BodyStyles>
);

export default Body;
