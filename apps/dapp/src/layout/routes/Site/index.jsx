/* --- Global --- */
import React from 'react';
import {Router} from '@reach/router';

/* --- Local --- */
import {Site} from 'templates';
import {Home, About, Guide} from 'pages';

/* --- Component --- */
const IndexPage = () => (
  <Site>
    <Router primary={false} style={{width: '100%'}}>
      <Home path="/" />
      <About path="/about" />
      <Guide path="/guide" />
    </Router>
  </Site>
);

export default IndexPage;
