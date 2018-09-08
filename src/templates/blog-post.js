import React from 'react'
import Link from 'gatsby-link'
import mstyles from '../layouts/msite.module.css'
import "katex/dist/katex.min.css"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog"><span className={mstyles.bspan}>Go Back</span></Link>
      <div className={mstyles.blogcontent}>
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div  dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
