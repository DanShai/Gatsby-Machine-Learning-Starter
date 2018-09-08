import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'

import mstyles from '../layouts/msite.module.css'
const Header = ({ siteTitle }) => (
  <div className={mstyles.coloredbar}  >
    <div className={mstyles.mcontainer} >
      <h1>
        <Link to="/" className={mstyles.mlinks} >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Menu />

  </div>
)

export default Header
