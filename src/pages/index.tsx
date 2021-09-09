import React from 'react'
import { Box, Grid } from '@material-ui/core';
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import VideoCard from '../components/VideoCard'
import { getVideos } from '../database/getVideos'
import renderToken from '../utils/generateToken'

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

const Home = ({ videos }: VideosList) => (
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await getVideos();
  return {
    props: {
      videos: JSON.parse(JSON.stringify(data))
    },
    revalidate: 5
  }
}