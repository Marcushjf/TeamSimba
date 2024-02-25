import { Fragment } from "react";
import elder1 from "../assets/elder1.jpg";
import elder2 from "../assets/elder2.jpg";
import elder3 from "../assets/elder3.jpg";
import caregiver from "../assets/caregiverwide.jpg";
import caregiver2 from "../assets/caregiver2.png";
import caregiver3 from "../assets/caregiver3.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <div className="pt-3 pb-3 w-100" style={{ height: "85vh", position: "relative" }}>
        <BigImage />
        <Description />
      </div>
    </Fragment>
  );
};

const BigImage = () => {
  return (
    /*<div className="d-block h-50">
      <img
        src={caregiver}
        style={{ objectFit: "cover" }}
        className="img-fluid h-100 w-100"
        alt="..."
      ></img>
    </div>*/
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide d-block h-50"
    >
      <Link to="/memories">
        <button className="btn btn-dark btn-lg" style={{ position: "absolute", bottom: 30, left: 30, zIndex: 2 , width:'200px'}}>Try Now</button>
      </Link>
          
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active btn btn-light"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner h-100 w-100">
        <div
          className="carousel-item active"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <img
            src={caregiver}
            className="d-block img-fluid"
            alt="..."
            style={{ objectFit: "cover", height:'400px' }}
          />
          <div className="carousel-caption d-none d-md-block mb-5">
            <p className='text-dark' style={{fontSize:'27px'}}>Making the moments that matter stay forever.</p>
          </div>
        </div>
        <div className="carousel-item w-100 h-100" data-bs-interval="5000">
          <img
            src={caregiver2}
            className="img-fluid h-100 w-100"
            alt="..."
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-dark" style={{fontSize:'27px'}}>Making the moments that matter stay forever.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src={caregiver3}
            className="img-fluid h-100 w-100"
            alt="..."
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <p className="text-light" style={{fontSize:'25px'}}>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const Description = () => {
  return (
    <div className="row h-50 pt-5 w-100">
      <div
        className="col-4"
        style={{ width: "40%", display: "flex", alignItems: "center" }}
      >
        <p className="text-center">
          At MemoryMe, we know how hard it is to see your family lose themselves
          to Dementia - not only in terms of their memories but their identities
          too. That’s why we came up with the first text-to-image generator,
          where caregivers and family members can input special memories shared
          to create images.
        </p>
      </div>

      <div className="col-6 p-0 m-0" style={{ width: "60%", height: "100%" }}>
        <div className="row" style={{ height: "10%" }}>
          <p
            className="ms-5"
            style={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Testimonials
          </p>
        </div>
        <div className="row w-100 h-100">
          <img
            src={elder1}
            alt="pic1"
            style={{ width: "30%", objectFit: "cover", height: "80%" }}
            className="col mb-2 pe-3 ps-5"
          />
          <img
            src={elder2}
            alt="pic2"
            style={{ width: "30%", objectFit: "cover", height: "80%" }}
            className="col mb-2 pe-3"
          />
          <img
            src={elder3}
            alt="pic3"
            style={{ width: "30%", objectFit: "cover", height: "80%" }}
            className="col mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
