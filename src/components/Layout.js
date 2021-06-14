import React from "react"
import Navbar from "./Navbar"
// style
import "../styles/global.scss"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      <div>{children}</div>

      <footer>
        <p>
          Copyright 2021 <strong>codingwhale.netlify.app</strong>
        </p>
      </footer>
    </div>
  )
}
