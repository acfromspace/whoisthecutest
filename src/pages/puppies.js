import React from 'react'
import {
  Image as CloudImage,
  CloudinaryContext,
  Transformation,
} from 'cloudinary-react'

import Layout from '../components/layout'

const Puppies = () => (
  <Layout>
    <h2>
      <span role="img" aria-label="Dog Face">
        🐶
      </span>{' '}
      Puppies
    </h2>
    <p>Enjoy the puppies!</p>
    <CloudinaryContext cloudName="acfromspace">
      <CloudImage publicId="WhoIsTheCutest/doggo.gif">
        <Transformation quality="100" width="550" crop="scale" />
      </CloudImage>
    </CloudinaryContext>
    <p>Now here are the puppies with rainbows!</p>
    <CloudinaryContext cloudName="acfromspace">
      <CloudImage publicId="WhoIsTheCutest/doggodoggo.gif">
        <Transformation quality="100" crop="scale" />
      </CloudImage>
    </CloudinaryContext>
  </Layout>
)

export default Puppies
