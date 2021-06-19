import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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

  const onClick = () => {
    const menu = document.querySelector(".links")
    const classList = menu.classList
    if (classList.contains("responsive")) {
      classList.remove("responsive")
    } else {
      classList.add("responsive")
    }
  }

  const onClickBtn = () => {
    const menu = document.querySelector(".links")
    const classList = menu.classList
    if (classList.contains("responsive")) {
      classList.remove("responsive")
    }
  }

  return (
    <nav>
      <div className="title">
        <h1>🐋 {title}</h1>
      </div>

      <div className="burger">
        <FontAwesomeIcon icon={faBars} size="2x" onClick={onClick} />
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
        <button onClick={onClickBtn}>back</button>
      </div>
    </nav>
  )
}
