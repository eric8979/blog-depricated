import React from "react"
import Layout from "../components/Layout"
// styles
import * as styles from "../styles/about.module.scss"

export default function about() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Welcome to Eric Whale's blog!</h2>

        <div className={styles.description}>
          <p>I believe that ...</p>
          <br />
          <p>
            One must still have chaos in oneself to be able to give birth to a
            dancing star.
            <br /> - Friedrich Nietzsche -
          </p>
          <br />
          <p>
            I love programming, learning new things, adventure, and "chaos".{" "}
            <br /> For me, chaos is a constant change, dynamic movement, the
            advance. I'm a student who loves programming and learning new
            things. React, node.js/express, Python. And I know that I won't stop
            here. Because I will keep dancing in the Chaos looking for the
            Stars.
          </p>
        </div>

        <div className={styles.links}>
          <p>
            GitHub: <a href="https://github.com/eric8979">eric8979</a>
          </p>
          <p>
            twitter:{" "}
            <a href="https://twitter.com/ericthewhale">@ericthewhale</a>
          </p>
          <p>email: hsh048148@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}
