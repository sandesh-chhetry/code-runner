import React from "react";
import { Link } from "react-router-dom";
import Python from "../../assets/images/python.png"
import HTML from "../../assets/images/html.png"
import JS from "../../assets/images/js.png"
import Java from "../../assets/images/java.png"
import CPP from "../../assets/images/cpp.png"
import Rust from "../../assets/images/rust.png"
import PHP from "../../assets/images/php.png"
const Sidebar = () => {
  return (
    <aside className="sidebar sidebar-wrap bg-dark">
      <ul>
        <li className="">
          <Link to={'/'} className="link-wrap tooltip-container">
            <img src={Python} alt="" />
            <span className="tooltip-text">Python</span>
          </Link>
        </li>
        <li className="">
          <Link to={'/'} className="link-wrap tooltip-container">
            <img src={HTML} alt="" />
            <span className="tooltip-text">HTML</span>
          </Link>
        </li>
        <li className="">
          <Link to={'/'} className="link-wrap tooltip-container">
            <img src={JS} alt="" />
            <span className="tooltip-text">JavaScript</span>
          </Link>
        </li>
        <li className="">
          <Link to={'/'} className="link-wrap tooltip-container">
            <img src={Java} alt="" />
            <span className="tooltip-text">Java</span>
          </Link>
        </li>
        <li className="">
          <Link to={'/'} className="link-wrap tooltip-container">
            <img src={CPP} alt="" />
            <span className="tooltip-text">C++</span>
          </Link>
        </li>
        <li className="">
          <Link to={'/'} className="link-wrap tooltip-container">
            <img src={Rust} alt="" />
            <span className="tooltip-text">Rust</span>
          </Link>
        </li>
        <li className="">
          <Link to={'/'} className="link-wrap tooltip-container">
            <img src={PHP} alt="" />
            <span className="tooltip-text">PHP</span>
          </Link>
        </li>

      </ul>

    </aside>
  )
}

export default Sidebar