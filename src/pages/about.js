import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// styles
import * as styles from "../styles/about.module.scss"

export default function about({ data }) {
  const image = getImage(data.file)

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Welcome!</h2>
          <GatsbyImage image={image} alt={"banner2"} />
        </div>

        <div className={styles.description}>
          <p>I am...</p>
          <p>I believe in...</p>
          <br />
          <ul>
            <li>
              <strong>Language:</strong> JavaScript/TypeScript, Python, graphQL
            </li>
            <li>
              <strong>Tool:</strong> react, node/express, mongoDB
            </li>
          </ul>
        </div>

        <div className={styles.links}>
          <p>
            GitHub: <a href="https://github.com/eric8979">eric8979</a>
          </p>
          <p>
            twitter:{" "}
            <a href="https://twitter.com/ericthewhale">@ericthewhale</a>
          </p>
          <p>e-mail: hsh048148@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Logo2 {
    file(relativePath: { eq: "logo2.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
