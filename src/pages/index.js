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
          <h2>Coding Whale</h2>
          <h3>Learning Enthusiast | Web Developer</h3>
          <Link to="/posts">👨‍💻 blog</Link>
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
