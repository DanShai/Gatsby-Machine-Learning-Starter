import React from 'react'
import Link from 'gatsby-link'

import mstyles from '../layouts/msite.module.css'

const Menu = () => (
  <div className={mstyles.menucontainer}>
    <div className={mstyles.innermenucontainer}>
      <div>
        <Link to="/" className={mstyles.wlink}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" className={mstyles.wlink}>
          About
        </Link>
      </div>
      <div>
        <Link to="/projects" className={mstyles.wlink}>
          Projects
        </Link>
      </div>
      <div>
        <Link to="/blog" className={mstyles.wlink}>
          Blog
        </Link>
      </div>
      <div>
        <Link to="/mnit" className={mstyles.wlink}>
          Mnist Tensorflow{' '}
        </Link>
      </div>
    </div>
  </div>
)

export default Menu
