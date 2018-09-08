import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import mstyles from './msite.module.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title} 
      meta={[
        {
          name: 'description',
          content: ' Dan Blog ',
        },
        { name: 'keywords', content: 'gatsby, react,Dan Shai.' },
      ]}
    />


    <Header siteTitle={data.site.siteMetadata.title} />


    <div className={mstyles.bodcontainer}    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
