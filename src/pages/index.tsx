import React from 'react'
import type { NextPage } from 'next';
import { Box, Button, Grid } from '@material-ui/core';
import Layout from '../components/Layout'
import {GetStaticProps} from 'next'
import VideoCard from '../components/VideoCard'

type VideoProps = {
  title: string;
  thumb: string;
  _id: string;
  authorName: string;
  authorAvatar: string;
  views: number;
  updatedAt: Date;
}

type VideosList = {
  videos: VideoProps[]
}

const Home = ({videos} : VideosList) => (
  <Layout title='Youtube'>
        <Box p={2}>
        <Grid container spacing={4}>
          {videos.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard 
              _id={item._id} 
              thumb={item.thumb}
              title={item.title}
              authorAvatar={item.authorAvatar}
              authorName={item.authorName}
              views={item.views}
              updatedAt={item.updatedAt}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
  </Layout>
);

export default Home;


export const getStaticProps : GetStaticProps = () => {

const videos = [
  {
    _id: '1',
    title: 'Video1',
    thumb: '/thumbs/next01.png',
    authorName: 'Pablo',
    authorAvatar: 'https://images.unsplash.com/photo-1630871502167-7adec7d17d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    views: 234311,
    updatedAt: new Date().getTime()
},
  {
    _id: '1',
    title: 'Video1',
    thumb: '/thumbs/next02.png',
    authorName: 'Pablo',
    authorAvatar: 'https://images.unsplash.com/photo-1630871502167-7adec7d17d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    views: 234311,
    updatedAt: new Date().getTime()
},
  {
    _id: '1',
    title: 'Video1',
    thumb: '/thumbs/next03.png',
    authorName: 'Pablo',
    authorAvatar: 'https://images.unsplash.com/photo-1630871502167-7adec7d17d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    views: 234311,
    updatedAt: new Date().getTime()
},
  {
    _id: '1',
    title: 'Video1',
    thumb: '/thumbs/next02.png',
    authorName: 'Pablo',
    authorAvatar: 'https://images.unsplash.com/photo-1630871502167-7adec7d17d25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    views: 234311,
    updatedAt: new Date().getTime()
},
]

  return {
    props: {
      videos: videos
    }
  }
}


