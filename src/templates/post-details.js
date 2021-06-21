import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/post-details.module.scss"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

const projectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  deckDeckGoHighlightElement(html)
  const { title, category, subtitle, date } = data.markdownRemark.frontmatter
  const image = getImage(data.markdownRemark.frontmatter.featuredImg)

  const onlyDate = date.slice(0, 10)

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.frontmatter}>
          <span>{onlyDate}</span>
          <span>{category}</span>
        </div>

        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.subtitle}>{subtitle}</h2>

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
export default projectDetails

export const query = graphql`
  query Posts($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
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
