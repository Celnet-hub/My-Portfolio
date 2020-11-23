//THIS FILE IS USED TO RENDER THE LAYOUT OF MY WEBPAGE
import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  //using React.useState to make sideBarIsOpen false
  const [sideBarIsOpen, setSideBarToOpen] = React.useState(false)
  //create a callback function that makes setSideBarToOpen the opposite of sideBarIsOpen state.
  const toggleSideBar = () => {
    setSideBarToOpen(!sideBarIsOpen)
  }
  //console.log(sideBarIsOpen);
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar} />
      <Sidebar sideBarIsOpen={sideBarIsOpen} toggleSideBar={toggleSideBar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
