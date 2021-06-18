import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// styles
import * as styles from "../styles/posts.module.scss"

export default function Postbox({ post, date, time, image }) {
  return (
    <div>
      <Link
        className={styles.post}
        to={`/posts/${post.frontmatter.slug}`}
        key={post.id}
      >
        <GatsbyImage className={styles.thumb} image={image} alt={"thumbnail"} />

        <div className={styles.info}>
          <p>
            <h3>{post.frontmatter.title}</h3> ({post.frontmatter.category})
          </p>
          <p className={styles.subtitle}>{post.frontmatter.subtitle}</p>
          <p className={styles.date}>
            {date} ({time})
          </p>
        </div>
      </Link>
    </div>
  )
}
