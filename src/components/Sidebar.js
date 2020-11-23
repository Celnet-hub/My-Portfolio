import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ sideBarIsOpen, toggleSideBar }) => {
  return (
    //the placeholder ${sideBarIsOpen?'show-sidebar' : ''} means if sideBarIsOpen, 'show-sidebar' else show an empty string
    <aside className={`sidebar ${sideBarIsOpen ? "show-sidebar" : ""}`}>
      {/* creating a button that closes the sidebar */}
      <button className="close-btn" onClick={toggleSideBar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${sideBarIsOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${sideBarIsOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
