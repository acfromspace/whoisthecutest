import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'semantic-ui-react'

import './style.css'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <Container>
      <h1 style={{padding: '10rem', marginBottom: '3rem', textAlign: 'center'}}>
        <Link style={{ color: 'white', font: '50px Georgia'}} to="/">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </div>
)

export default Header
