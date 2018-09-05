import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu } from 'semantic-ui-react'

import Header from './header'
import Footer from './footer'

import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'

// Obtains the .js and puts the content into the children below
const MenuOption = ({ children, ...props }) => (
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

        <div style={{ display: "flex", minHeight: "98vh", flexDirection: "column" }}>

          {/* HEADER GOES HERE */}

          <Header siteTitle={data.site.siteMetadata.title} />

          {/* CONTENT GOES HERE */}

          {/* a container limits content to a maximum width */}
          <div style={{ marginTop: "3rem", flex: 1 }}>
            <Container>
              {/* a grid issued to harmonize negative space in a layout */}
              {/* relaxed = a grid can increase its gutters to allow for more negative space */}
              {/* stackable = a grid can have its columns stack on-top of each other after reaching mobile breakpoints */}
              <Grid relaxed stackable>
                <Grid.Row>
                  <Grid.Column mobile={16} tablet={4} computer={4}>
                    <Menu fluid vertical>
                      <MenuOption to='/'><span role="img" aria-label="House With Garden">🏡</span> Home</MenuOption>
                      <MenuOption to='/puppies'><span role="img" aria-label="Dog Face">🐶</span> Puppies</MenuOption>
                      <MenuOption to='/video'><span role="img" aria-label="Videocassette">📼</span> Video</MenuOption>
                      <MenuOption to='/who'><span role="img" aria-label="Thinking Face">🤔</span> Who made this?</MenuOption>
                    </Menu>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={8}>
                    {/* Content goes here */}
                    {children}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>

          {/* FOOTER GOES HERE */}

          <Container>
            <Grid>
              <Grid.Row centered>
                <Footer />
              </Grid.Row>
            </Grid>
          </Container>

        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
