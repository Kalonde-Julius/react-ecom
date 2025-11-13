import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo/horizontal.png';

const Header = () => {
  return (
    <header className="shadow">
      <div className="bg-dark text-center py-3">
        <span className="text-white"> Your fashion partner </span>
      </div>

      <div className="container">
        <Navbar expand="lg" className="">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" width={160} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1"> Men </Nav.Link>
              <Nav.Link href="#action1"> Women </Nav.Link>
              <Nav.Link href="#action2"> Kids </Nav.Link>
            </Nav>

            <div className="nav-right d-flex">
              <a href="" className="ms-3">
                <svg
                  xmlns="https://www.svgrepo.com/svg/458972/user-alt"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                </svg>
              </a>
              <a href="" className="ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 13H4a.5.5 0 0 1-.49-.402L1.61 2H.5a.5.5 0 0 1-.5-.5zM3.14 6l1.25 5h8.22l1.25-5H3.14zM5.5 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />{" "}
                </svg>
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
