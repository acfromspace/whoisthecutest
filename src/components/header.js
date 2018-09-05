import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ mobile, siteTitle }) => (
  <div style={{ background: 'linear-gradient(45deg, #ffd1dc, #b19cd9)' }}>
      <h1 style={{ padding: mobile ? '2rem' : '10rem', textAlign: 'center' }}>
        <Link style={{ color: 'white', font: mobile ? '1em Georgia' : '3em Georgia' }} to="/">
          {siteTitle}
        </Link>
      </h1>
  </div>
)

Header.propTypes = {
  mobile: PropTypes.bool,
}

export default Header
