import React from "react"
import Navbar from "./Navbar"
// style
import "../styles/global.scss"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <div>{children}</div>

      <footer>
        <p>
          Copyright 2021 <strong>Coding Whale</strong>
        </p>
      </footer>
    </div>
  )
}
