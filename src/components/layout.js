import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h2
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `sandybrown`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ textAlign: `center` }}>
        <hr />
        <p>
          {` `}
          <a style={{color: `chocolate`}} href={`https://twitter.com/fatimamds99`}>Twitter</a> • 
          <a style={{color: `chocolate`}} href={`https://www.linkedin.com/in/fatimamds/`}> LinkedIn</a> • 
          <a style={{color: `chocolate`}} href={`https://github.com/fatimamds`}> GitHub </a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
