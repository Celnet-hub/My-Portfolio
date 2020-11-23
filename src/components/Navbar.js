import React from "react"
import logo4 from "../assets/logo4.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSideBar}) => {
  const navbar = document.querySelector('.navbar')
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
      {
        navbar.classList.add("fixed-nav")
      }
    } else{
      navbar.classList.remove('fixed-nav')
    }
  })
  return (
    <nav className={`${navbar} fixed-nav`}>
      <div className="nav-center">
        <div className="nav-header">
          {/* Todo: creat my own logo use light blue 1*/}
          <img src={logo4} alt="my logo" />
          <button type="button" className="toggle-btn" onClick={toggleSideBar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}   

export default Navbar
