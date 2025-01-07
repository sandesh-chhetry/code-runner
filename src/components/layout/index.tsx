import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import { Container } from "react-bootstrap";

const Layout = ({ ...props }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div className="body-wrap">
          {props.children}
        </div>

      </div>
    </>
  )
}

export default Layout