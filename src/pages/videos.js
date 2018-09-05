import React from 'react'
import YouTubePlayer from "react-player/lib/players/YouTube";

import Layout from '../components/layout'

const Videos = () => (
  <Layout>
    <h2><span role="img" aria-label="Videocassette">📼</span> Video</h2>
    <p>This video will cheer you up!</p>
    <YouTubePlayer url="https://www.youtube.com/watch?v=lAIGb1lfpBw"
      playing
      loop
      height="100%"
      width="100%"
    />
  </Layout>
)

export default Videos
