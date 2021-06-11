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
        <StaticImage
          src="../images/logo.png"
          alt="logo"
          placeholder="blurred"
          width={60}
          height={60}
        />
        <h1>{title}</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/#">about</Link>
        <Link to="/##">blog</Link>
      </div>
    </nav>
  )
}
