import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// style
import * as styles from "../styles/home.module.scss"

export default function Home({ data }) {
  const image = getImage(data.file)

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.image}>
          <GatsbyImage image={image} alt={"banner"} />
        </div>

        <div className={styles.title}>
          <h3>Eric Whale</h3>
          <ul className={styles.description}>
            <li>Computer Engineering Student</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Logo {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
