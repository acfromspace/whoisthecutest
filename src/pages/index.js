import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>
      <span role="img" aria-label="Waving hand">
        👋
      </span>{' '}
      Greetings!
    </h2>

    <p>
      You might be wondering why you're here and why the person sent you this
      link. Well look no further, if it's not obvious enough the cutest being
      is...
    </p>

    {/* `marginBottom` is at a default 14px, most likely to normal text font. */}
    <p
      style={{
        font: '100px Georgia',
        textAlign: 'center',
        marginBottom: '14px',
      }}
    >
      YOU
    </p>

    <p>
      Of course the opinion is subjective, but isn't it amazing that someone out
      there thinks <i>you're the cutest</i>?
    </p>

    <p>Go ahead and navigate around for some prizes!</p>

    <p>You deserve it you cute person!</p>
  </Layout>
)

export default IndexPage
