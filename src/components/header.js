import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div style={{ background: 'linear-gradient(45deg, #ffd1dc, #b19cd9)' }}>
      <h1 style={{ padding: '10rem', textAlign: 'center' }}>
        <Link style={{ color: 'white', font: '50px Georgia' }} to="/">
          {siteTitle}
        </Link>
      </h1>
  </div>
)

export default Header
