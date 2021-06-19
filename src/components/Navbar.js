import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  const info = useStaticQuery(graphql`
    query Banner {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = info.site.siteMetadata

  return (
    <nav>
      <div className="title">
        <h1>🐋 {title}</h1>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/posts">blog</Link>
        <a href="https://github.com/eric8979">
          <StaticImage
            src="../images/githublogo/githublight.png"
            alt="github"
            placeholder="blurred"
            width={35}
            height={35}
          />
        </a>
      </div>
    </nav>
  )
}
