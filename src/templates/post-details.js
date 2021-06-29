import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/post-details.module.scss"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const projectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const {
    title,
    category,
    subtitle,
    date,
    imgSource,
  } = data.markdownRemark.frontmatter
  const image = getImage(data.markdownRemark.featuredImg)

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

        <div className={styles.imgBox}>
          <GatsbyImage
            className={styles.featuredImg}
            image={image}
            alt={"featured"}
          />
          <span>{imgSource}</span>
        </div>

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
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
      frontmatter {
        date
        title
        category
        subtitle
        imgSource
      }
    }
  }
`
