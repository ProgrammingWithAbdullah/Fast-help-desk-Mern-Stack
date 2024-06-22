import React, { Fragment } from "react";

function Indexx() {
  return (
    <Fragment>
      <nav
        id="main_nav"
        className="navbar navbar-expand-lg navbar-light bg-white shadow"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand h1" href="index.html">
            <i className="bx bx-buildings bx-sm text-dark" />
            <span className="text-dark h4">Fast</span>{" "}
            <span className="text-primary h4">Help Desk</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler-success"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="navbar-toggler-success"
          >
            <div className="flex-fill mx-xl-5 mb-2">
              <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="Caarpoling"
                  >
                    Caarpoling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="books"
                  >
                    Books
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="hostels"
                  >
                    Hostels
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="swaps"
                  >
                    Swaps
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link btn-outline-primary rounded-pill px-3"
                    href="questions"
                  >
                    Questions
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <a className="nav-link" href="#">
                <i className="bx bx-bell bx-sm bx-tada-hover text-primary" />
              </a>
              <a className="nav-link" href="#">
                <i className="bx bx-cog bx-sm text-primary" />
              </a>
              <a className="nav-link" href="#">
                <i className="bx bx-user-circle bx-sm text-primary" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Close Header */}
      {/* Start Banner Hero */}
      <div className="banner-wrapper bg-light">
        <div
          id="index_banner"
          className="banner-vertical-center-index container-fluid pt-5"
        >
          {/* Start slider */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
              />
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
              />
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
              />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Addressing The <strong>Challenges</strong>
                      <br /> 0f <strong>NUCES </strong>Life
                    </h1>
                    <p className="banner-body text-muted py-3 mx-0 px-0">
                      Students at FAST-NUCES often face numerous challenges in
                      managing their university life, from transportation to
                      seeking academic guidance. Privacy concerns make anonymity
                      crucial in seeking help, but existing platforms fall short
                      in providing tailored and anonymous environments for
                      student needs.{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/page/1"
                        target="_parent"
                      >
                        .
                      </a>
                    </p>
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/page/1"
                      target="_parent"
                    ></a>
                  </div>
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/page/1"
                    target="_parent"
                  ></a>
                </div>
                <a
                  rel="nofollow"
                  href="https://templatemo.com/page/1"
                  target="_parent"
                ></a>
              </div>
              <a
                rel="nofollow"
                href="https://templatemo.com/page/1"
                target="_parent"
              >
                <div className="carousel-item">
                  <div className="py-5 row d-flex align-items-center">
                    <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                      <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                        Project <b>Scope</b>
                      </h1>
                      <p className="banner-body text-muted py-3">
                        Our app is designed to address these challenges
                        comprehensively. From facilitating carpooling
                        arrangements to providing anonymous advice on courses
                        and instructors, it covers various aspects of university
                        life. Additionally, features like cross-university
                        discussions ensure a holistic approach to student
                        support.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="py-5 row d-flex align-items-center">
                    <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                      <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                        What Makes Your Website<b> Unique</b>
                      </h1>
                      <p className="banner-body text-muted py-3">
                        User authentication ensures only FAST-NUCES students and
                        verified outsiders can access the platform, with
                        separate portals for different purposes. Users can
                        create and join groups, share content anonymously, and
                        utilize search functionality for easy navigation. With
                        mobile responsiveness and robust moderation
                        capabilities, our app offers a seamless user experience
                        across devices.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <a
              rel="nofollow"
              href="https://templatemo.com/page/1"
              target="_parent"
            ></a>
            <a
              className="carousel-control-prev text-decoration-none"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <i className="bx bx-chevron-left" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next text-decoration-none"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <i className="bx bx-chevron-right" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          {/* End slider */}
        </div>
      </div>
      {/* End Banner Hero */}
      {/* Start Service */}
      <section className="service-wrapper py-3">
        <div className="container-fluid pb-3">
          <div className="row">
            <h2 className="h2 text-center col-12 py-5 semi-bold-600">
              <b>Services</b>
            </h2>
            <div className="service-header col-2 col-lg-3 text-end light-300">
              <i className="bx bx-gift h3 mt-1" />
            </div>
            <div className="service-heading col-10 col-lg-9 text-start float-end light-300">
              <h2 className="h3 pb-4 typo-space-line">
                We Will Solve Your All Problems Here !
              </h2>
            </div>
          </div>
          <p style={{ color: "white", maxWidth: "700px", marginLeft: "275px" }}>
            User authentication ensures only FAST-NUCES students and verified
            outsiders can access the platform, with separate portals for
            different purposes. Users can create and join groups, share content
            anonymously, and utilize search functionality for easy navigation.
            With mobile responsiveness and robust moderation capabilities, our
            app offers a seamless user experience across devices.
          </p>
        </div>
        <div className="service-tag py-5 bg-secondary">
          <div className="col-md-12">
            <ul className="nav d-flex justify-content-center">
              <li className="nav-item mx-lg-4">
                <a
                  className="filter-btn nav-link btn-outline-primary active shadow rounded-pill text-light px-4 light-300"
                  href="/Books"
                  data-filter=".project"
                >
                  Books
                </a>
              </li>
              <li className="nav-item mx-lg-4">
                <a
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="/Caarpoling"
                  data-filter=".graphic"
                >
                  Caarpoling
                </a>
              </li>
              <li className="filter-btn nav-item mx-lg-4">
                <a
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="/Hostels"
                  data-filter=".ui"
                >
                  Hostels
                </a>
              </li>
              <li className="nav-item mx-lg-4">
                <a
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="Swaps"
                  data-filter=".branding"
                >
                  Swaps
                </a>
              </li>
              <li className="nav-item mx-lg-4">
                <a
                  className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                  href="/Questions"
                  data-filter=".branding"
                >
                  Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container overflow-hidden py-5">
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="service card-img"
                src="./assets/img/services-01.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Hard Copies
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-02.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Soft copies
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-03.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Questions &amp; Answers
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-04.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Hostel Vacancies
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-05.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Free Rides
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-06.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Swaps
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-07.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Guide Books
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
          {/* Start Recent Work */}
          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <img
                className="card-img"
                src="./assets/img/services-08.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
                    Cross Uni Discussions
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* End Recent Work */}
        </div>
      </section>
      {/* End Service */}

      {/* Start Footer */}
      <footer className="bg-secondary pt-4">
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-3 col-12 align-left">
              <a className="navbar-brand" href="index.html">
                <i className="bx bx-buildings bx-sm text-light" />
                <span className="text-light h5">Fast NUCES</span>{" "}
                <span className="text-light h5 semi-bold-600">Help Desk</span>
              </a>
              <p className="text-light my-lg-4 my-2"></p>
              <ul className="list-inline footer-icons light-300">
                <li className="list-inline-item m-0">
                  <a
                    className="text-light"
                    target="_blank"
                    href="http://facebook.com/"
                  >
                    <i className="bx bxl-facebook-square bx-md" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a
                    className="text-light"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <i className="bx bxl-linkedin-square bx-md" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a
                    className="text-light"
                    target="_blank"
                    href="https://www.whatsapp.com/"
                  >
                    <i className="bx bxl-whatsapp-square bx-md" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a
                    className="text-light"
                    target="_blank"
                    href="https://www.flickr.com/"
                  >
                    <i className="bx bxl-flickr-square bx-md" />
                  </a>
                </li>
                <li className="list-inline-item m-0">
                  <a
                    className="text-light"
                    target="_blank"
                    href="https://www.medium.com/"
                  >
                    <i className="bx bxl-medium-square bx-md" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
              <h2 className="h4 pb-lg-3 text-light light-300">For Contact</h2>
              <ul className="list-unstyled text-light light-300">
                <li className="pb-2">
                  <i className="bx-fw bx bx-phone bx-xs" />
                  <a
                    className="text-decoration-none text-light py-1"
                    href="tel:010-020-0340"
                  >
                    +923004934903
                  </a>
                </li>
                <br></br>
                <li className="pb-2">
                  <i className="bx-fw bx bx-mail-send bx-xs" />
                  <a
                    className="text-decoration-none text-light py-1"
                    href="mailto:info@company.com"
                  >
                    Abdullah Amer: abdullahraajput1727@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100 bg-primary py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-start text-center text-light light-300"></p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-end text-center text-light light-300">
                  Thank You{" "}
                  <a
                    rel="sponsored"
                    className="text-decoration-none text-light"
                    href="https://templatemo.com/"
                    target="_blank"
                  >
                    <strong>Fast Help Desk</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Indexx;
