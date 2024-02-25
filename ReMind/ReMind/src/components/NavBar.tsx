import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/msg-4130531030-221265.jpg";

const NavBar = () => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg bg-body-light pt-1"
        style={{ height: "100px" }}
      >
        <div className="d-flex border-bottom border-dark h-100 w-100">
          <Link to="/" className="navbar-brand ps-3">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src={logo}
                alt="Logo"
                width="90"
                className="d-inline-block align-text-top pe-4"
              />
              <h2 style={{fontFamily: 'Times New Roman'}}>MemoryMe</h2>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between w-100"
            id="navbarNavAltMarkup"
            style={{ marginLeft: "40%"}}
          >
            <div className="navbar-nav">
              <Link
                to="/"
                className="nav-link active ms-5"
                aria-current="page"
                style={{ fontSize: "25px",fontFamily: 'Times New Roman'}}
              >
                Home
              </Link>
              <Link
                to="/memories"
                className="nav-link ms-"
                style={{ fontSize: "25px",fontFamily: 'Times New Roman' , marginLeft:'20%'}}
              >
                Memories
              </Link>
              <Link
                to="/chatbot"
                className="nav-link"
                style={{ fontSize: "25px",fontFamily: 'Times New Roman', marginLeft:'20%' }}
              >
                ChatBot
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
