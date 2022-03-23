import React from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'
import { CgShoppingCart } from 'react-icons/cg'

function Navbar() {
  return (
    <>
      <style jsx>{styles}</style>
      <nav className="navbar">
        <div className="navContainer">
          <div className="logo">
            <Link href="/">
              <a></a>
            </Link>
          </div>
          <div className="links">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Builds</a>
            </Link>
            <Link href="/">
              <a>Parts</a>
            </Link>
          </div>
          <div className="socials">
            <Link href="/cart">
              <a>
                <CgShoppingCart />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

const styles = css`
  nav {
    font-size: 20px;
    padding: 20px;
  }
  .navContainer {
    max-width: 1020px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    margin-right: auto;
  }
  .links {
    display: flex;
    margin-right: 40px;
  }
  a {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 0.2s;
    vertical-align: middle;
    color: rgba(255, 255, 255, 0.8);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.04);
  }
  .social a {
    font-size: 28px;
  }
`

export default Navbar
