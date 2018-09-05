import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu } from 'semantic-ui-react'

import Header from './header'
import Footer from './footer'

import './style.css'

import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'

// Obtains the .js and puts the content into the children below
const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Who is the cutest?' },
            { name: 'keywords', content: 'you' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* a container limits content to a maximum width */}
        <Container>
          {/* a grid issued to harmonize negative space in a layout */}
          {/* relaxed = a grid can increase its gutters to allow for more negative space */}
          {/* stackable = a grid can have its columns stack on-top of each other after reaching mobile breakpoints */}
          <Grid relaxed stackable>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={4} computer={4}>
                <Menu fluid tabular vertical>
                  <LinkedItem to='/'><span role="img" aria-label="House With Garden">🏡</span> Home</LinkedItem>
                  <LinkedItem to='/puppies'><span role="img" aria-label="Dog Face">🐶</span> Puppies</LinkedItem>
                  <LinkedItem to='/videos'><span role="img" aria-label="Videocassette">📼</span> Videos</LinkedItem>
                  <LinkedItem to='/who'><span role="img" aria-label="Thinking Face">🤔</span> Who made this?</LinkedItem>
                </Menu>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                {/* Content goes here */}
                {children}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered Footer>
              <Footer />
            </Grid.Row>
          </Grid>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
