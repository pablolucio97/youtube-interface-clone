import React from 'react'
import type { NextPage } from 'next';
import { Button } from '@material-ui/core';
import Layout from '../components/Layout'

const Home: NextPage = () => (
  <div>
    <h1>Youtube clone</h1>
    <Button variant='contained' color='primary'>Subscribe</Button>
    <Layout title='Youtube'>
    </Layout>
  </div>
);

export default Home;


