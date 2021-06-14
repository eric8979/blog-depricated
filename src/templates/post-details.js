import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/post-details.module.scss"
import { graphql } from "gatsby"

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, category, subtitle } = data.markdownRemark.frontmatter
  const image = getImage(data.markdownRemark.frontmatter.featuredImg)

  return (
    <Layout>
      <div className={styles.container}>
        <h2>
          {title} <span>{category}</span>
        </h2>
        <h3>{subtitle}</h3>

        <GatsbyImage
          className={styles.featuredImg}
          image={image}
          alt={"featured"}
        />

        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Posts($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        subtitle
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
