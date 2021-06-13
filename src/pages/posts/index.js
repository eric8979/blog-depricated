import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// style
import * as styles from "../../styles/posts.module.scss"

export default function Posts({ data }) {
  const contact = data.site.siteMetadata.contact
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.container}>
        <p>
          Like what you see? Email me at <strong>{contact}</strong>
        </p>

        <div>
          {posts.map(post => {
            const image = getImage(post.frontmatter.thumb)
            const date = post.frontmatter.date.slice(0, 10)
            const time = post.frontmatter.date.slice(10)

            return (
              <div>
                <Link
                  className={styles.post}
                  to={`/posts/${post.frontmatter.slug}`}
                  key={post.id}
                >
                  <GatsbyImage
                    className={styles.thumb}
                    image={image}
                    alt={"thumbnail"}
                  />
                  <div className={styles.info}>
                    <p>
                      <h3>{post.frontmatter.title}</h3> (
                      {post.frontmatter.topic})
                    </p>
                    <p className={styles.subtitle}>
                      {post.frontmatter.subtitle}
                    </p>
                    <p className={styles.date}>
                      {date} ({time})
                    </p>
                  </div>
                </Link>
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
          topic
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
