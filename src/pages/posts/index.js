import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Postbox from "../../components/Postbox"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// style
import * as styles from "../../styles/posts.module.scss"

export default function Posts({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.postbox}>
          {posts.map(post => {
            const image = getImage(post.frontmatter.thumb)
            const date = post.frontmatter.date.slice(0, 10)
            const time = post.frontmatter.date.slice(10)

            return (
              <div key={post.id}>
                <Postbox post={post} image={image} date={date} time={time} />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    site {
      siteMetadata {
        contact
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          subtitle
          title
          category
          slug
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`
