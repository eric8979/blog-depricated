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

            return (
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
                <div>
                  <h3>
                    {post.frontmatter.title} ({post.frontmatter.topic})
                  </h3>
                  <p>{post.frontmatter.subtitle}</p>
                  <p>{post.frontmatter.date}</p>
                </div>
              </Link>
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
