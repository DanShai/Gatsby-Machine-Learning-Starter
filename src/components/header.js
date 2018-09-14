import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'

import mstyles from '../layouts/msite.module.css'
const Header = ({ siteTitle }) => (
  <div className={mstyles.coloredbar}>
    <div className={mstyles.namegt}>
      <h1>
        <Link to="/" className={mstyles.mlinks}>
          {siteTitle}
        </Link>
      </h1>
      <p>
        <a
          href="https://github.com/DanShai/Gatsby-Machine-Learning-Starter"
          className={mstyles.mlinks}
        >
          fork me on Github
        </a>
      </p>
    </div>
    <Menu />
  </div>
)

export default Header
