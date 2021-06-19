import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// styles
import * as styles from "../styles/posts.module.scss"

export default function Postbox({ post, date, time, image }) {
  return (
    <div className={styles.post}>
      <Link to={`/posts/${post.frontmatter.slug}`} key={post.id}>
        <div className={styles.thumbbox}>
          <GatsbyImage
            className={styles.thumb}
            image={image}
            alt={"thumbnail"}
          />
        </div>

        <div className={styles.info}>
          <p className={styles.category}>{post.frontmatter.category}</p>
          <h3 className={styles.title}>{post.frontmatter.title}</h3>
          <h4 className={styles.subtitle}>{post.frontmatter.subtitle}</h4>
          <p className={styles.date}>{date}</p>
        </div>
      </Link>
    </div>
  )
}
