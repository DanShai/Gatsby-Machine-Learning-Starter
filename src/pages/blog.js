import React from 'react'
import Link from 'gatsby-link'
import mstyles from '../layouts/msite.module.css'
import 'katex/dist/katex.min.css'
//require(`katex/dist/katex.min.css`)

const BlogPage = ({ data }) => (
  <div className={mstyles.nobordcontent}>
    <h2> Latest Posts </h2>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id} className={mstyles.bsummary}>
        <h2>{post.node.frontmatter.title}</h2>
        <small>
          Posted by {post.node.frontmatter.author} on{' '}
          {post.node.frontmatter.date}
        </small>
        <Link to={post.node.frontmatter.path}>
          <span className={mstyles.bspan}> Read More </span>
        </Link>
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
