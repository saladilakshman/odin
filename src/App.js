import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Home";
import AllPaths from "./components/Paths";
import About from "./components/About";
import Login from "./components/Login";
import Button from "./components/Button";
import Community from "./components/Community";
import Questions from "./footercomponents/FAQ";
import Terms from "./footercomponents/Terms";
import Stories from "./footercomponents/Stories";
//import Cards from "./components/card";
import {
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaSun,
  FaMoon
} from "react-icons/fa";
function Bars() {
  const [mode, setMode] = useState(false);
  const Icons = [
    { id: 1, href: "https://wwww.github.com", logo: <FaGithub /> },
    { id: 2, href: "https://www.facebook.com", logo: <FaFacebook /> },
    { id: 3, href: "https://www.discord.com", logo: <FaDiscord /> },
    { id: 4, href: "https://www.twitter.com", logo: <FaTwitter /> }
  ];
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm ms-5 me-5">
        <Link to="/">
          <img
            src="https://amrelshenawy.github.io/google-resultspage/images/odin.jpg"
            alt=""
            className="odin"
          />
        </Link>
        <h4>The odin Project</h4>

        <ul className="navbar-nav ms-auto me-5 gap-5 text-secondary font-weight-25">
          <li className="nav-item">
            <Link to="paths" className="nav-link text-secondary">
              All Paths
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link text-secondary">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="community" className="nav-link text-secondary">
              COMMUNITY
            </Link>
          </li>
          <li className="nav-item">
            <Link to="login" className="nav-link text-secondary">
              LOGIN
            </Link>
          </li>
          <Link to="button">
            {" "}
            <button className="btn bg-primary opacity-75 text-white border-2">
              GET STARTED
            </button>
          </Link>
          <li
            className="nav-item p-1"
            onClick={() => {
              setMode(!mode);
              document.body.classList.toggle("styles");
            }}
          >
            {mode ? <FaSun /> : <FaMoon />}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="paths" element={<AllPaths />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="button" element={<Button />}></Route>
        <Route path="community" element={<Community />}></Route>
        <Route path="questions" element={<Questions />}></Route>
        <Route path="terms" element={<Terms />}></Route>
        <Route path="stories" element={<Stories />}></Route>
      </Routes>
      <br />
      <br />
      <div className="d-flex justify-content-around align-items-center mt-5 ">
        <div>
          <span>
            <img
              src="https://amrelshenawy.github.io/google-resultspage/images/odin.jpg"
              alt=""
              className="w-25"
            />
          </span>
          <span>
            <h4 id="head">The odin Project</h4>
          </span>
          <br />
          <p id="para">
            High quality coding education created by an Open-Source community.
          </p>
          <div className="d-flex gap-4 mt-4">
            {Icons.map((icon) => {
              return (
                <div key={icon.id}>
                  <a href={icon.href}>
                    <p className="text-dark" id="logo">
                      {icon.logo}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div class="box">
            <h3 className="text-dark text-center pt-3">
              Start Learning For Free
            </h3>
            <input type="email" placeholder="EMAIL ADDRESS" id="input"></input>
            <button className="btn" id="gtn">
              Get Started
            </button>
          </div>
          <br />
          <nav className="navbar navbar-expand-sm" id="state">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link to="about" className="text-dark" id="ln">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="questions" className="text-dark" id="ln">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://dev.to/theodinproject"
                  className="text-dark"
                  id="ln"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link to="stories" className="text-dark" id="ln">
                  Success Stories
                </Link>
              </li>
              <li className="nav-item">Contribute</li>
              <li className="nav-item">Appendix</li>
              <li className="nav-item">
                <Link to="terms" className="text-dark" id="ln">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </HashRouter>
  );
}
export default Bars;
