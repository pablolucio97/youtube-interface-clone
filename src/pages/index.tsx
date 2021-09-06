// eslint-disable-next-line no-use-before-define
import React from 'react';
import type { NextPage } from 'next';
import { Button } from '@material-ui/core';

const Home: NextPage = () => (
  <div>
    <h1>Youtube clone</h1>
    <Button variant='contained' color='primary'>Subscribe</Button>
  </div>
);

export default Home;