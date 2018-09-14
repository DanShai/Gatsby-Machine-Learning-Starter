import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import mstyles from '../layouts/msite.module.css'

const Header = ({ siteTitle }) => (
  <div className={mstyles.coloredbar}>
    <div className={mstyles.namegt}>
      <h1>
        <Link to="/" className={mstyles.mlinks}>
          {siteTitle}
        </Link>
      </h1>
      <span className={mstyles.wlink}>
        <a
          href="https://github.com/DanShai/Gatsby-Machine-Learning-Starter"
          className={mstyles.mlinks}
        >
          fork me on Github <FontAwesomeIcon icon={faGithub} color="white" />
        </a>
      </span>
    </div>
    <Menu />
  </div>
)

export default Header
