import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Questions() {
  const [ccourse, setccourse] = useState("");
  const [cityy, setcityy] = useState("");
  const [message, setMessage] = useState("");
  const [useridd, setuseridd] = useState("");
  const history = useNavigate();

  const askstudents = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/askstud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usersid: useridd,
          message: message,
        }),
      });
      const data = await response.json();
      console.log(data);
      //       history("/indexx");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: ccourse,
          city: cityy,
          message: message,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "fixed", // Change position to fixed
          top: "65px", // Move the navbar 300px from the top
          width: "1020px", // Set width to 100% to span the entire width of the viewport
          zIndex: "1000", // Set a higher z-index to ensure it's above other content
        }}
        className="fixed-side-navbar"
      >
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link btn-outline-primary rounded-pill px-3"
              href="indexx"
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

      <div id="loader-wrapper">
        <div id="loader" />
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
      <div className="container">
        <div style={{ marginLeft: 125 }} className="tm-top-bar" />
        <section className="row tm-section-mb tm-section-2">
          <div className="col-md-12 tm-section-2-inner">
            <div className="tm-section-2-left">
              <div className="tm-img-container tm-img-container-1" />
              <div className="tm-img-container tm-img-container-2" />
            </div>
            <div className="tm-section-2-right tm-bg-primary">
              <div className="tm-section-2-text">
                <h2 className="tm-section-2-header tm-mb-45">
                  Let's Remove Doubts!
                </h2>
                <p></p>
                <h4>Academic Guidance ?</h4>
                <br />
                Can you recommend any elective courses that align with my
                interests and career goals?
                <br />
                <br /> What study strategies did you find most effective for
                succeeding this course?
                <br />
                <br /> Are there any resources or textbooks you recommend for
                further exploration of this subject?
                <p />
              </div>
            </div>
          </div>
        </section>
        <section className="row tm-section-3">
          <div className="col-md-12 tm-section-3-inner">
            <div className="tm-section-3-left tm-bg-primary">
              <div className="tm-section-3-text">
                <i className="fas fa-users fa-5x tm-welcome-icon d-block text-center ml-0" />
                <h2 className="tm-section-3-header tm-mb-35">
                  Career Advice ?
                </h2>
                <p>
                  What career paths have you pursued after completing your
                  degree in your field?
                  <br />
                  <br />
                  Are there any internship or job opportunities you would
                  recommend for students in our field?
                  <br />
                  <br />
                  How can I enhance my skills or build a portfolio to stand out
                  to potential employers?
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="tm-section-3-right">
              <div className="tm-img-container tm-img-container-3" />
            </div>
          </div>
        </section>
        <section className="row tm-section-pb" style={{ paddingBottom: 0 }}>
          <div className="col-md-12 tm-bg-accent tm-gallery-pad tm-gallery-container mx-auto">
            <h2 className="text-center tm-mb-45">Opportunities</h2>
            <div className="grid tm-gallery">
              <figure
                className="effect-lexi tm-gallery-item"
                onclick="openNewPage('page1.html')"
              >
                <img src="img/img-02.jpg" alt="Image" className="" />
                <figcaption>
                  <p style={{ fontSize: "150%" }}>
                    <b>Teachers</b>
                  </p>
                </figcaption>
              </figure>
              <figure
                className="effect-lexi tm-gallery-item"
                onclick="openNewPage('page2.html')"
              >
                <img src="img/img-03.jpg" alt="Image" className="" />
                <figcaption>
                  <p style={{ fontSize: "150%" }}>
                    <b>Seniors</b>
                  </p>
                </figcaption>
              </figure>
              <figure
                className="effect-lexi tm-gallery-item"
                onclick="openNewPage('page2.html')"
              >
                <img src="img/img-04.jpg" alt="Image" className="" />
                <figcaption>
                  <p style={{ fontSize: "150%" }}>
                    <b>Teacher Assistants</b>
                  </p>
                </figcaption>
              </figure>
              <figure
                className="effect-lexi tm-gallery-item"
                onclick="openNewPage('page2.html')"
              >
                <img src="img/img-05.jpg" alt="Image" className="" />
                <figcaption>
                  <p style={{ fontSize: "150%" }}>
                    <b>Cross University Discussions</b>
                  </p>{" "}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="container tm-container-contact">
          <div className="row">
            <div className="text-center col-12">
              <br></br>
              <h2 className="tm-section-title mb-4" style={{ color: "white" }}>
                Ask From Fast NU Teachers:
              </h2>
              <p className="mb-5" style={{ color: "white" }}>
                Select Your Preferences and Drop a Question, Fast Nu Respectice
                Teachers will Provide You With Best Answers/Solutions<br></br>
              </p>
              <br />
            </div>
            <form onSubmit={handleSubmit}>
              <select
                id="road"
                name="road"
                className="tm-input"
                required
                style={{ color: "orange" }}
                value={ccourse}
                onChange={(e) => setccourse(e.target.value)}
              >
                <option value="" disabled>
                  <b>Select A Course</b>
                </option>
                <option value="Introduction to ICT">
                  Introduction to ICT (0+1)
                </option>
                <option value="Programming Fundamentals">
                  Programming Fundamentals (3+1)
                </option>
                <option value="Applied Physics">Applied Physics (3+0)</option>
                <option value="Calculus & Analytical Geometry">
                  Calculus &amp; Analytical Geometry (3+0)
                </option>
                <option value="Pakistan Studies">Pakistan Studies (3+0)</option>
                <option value="English Composition & Comprehension">
                  English Composition &amp; Comprehension (2+1)
                </option>
                <option value="Object Oriented Programming">
                  Object Oriented Programming (3+1)
                </option>
                <option value="Digital Logic Design">
                  Digital Logic Design (3+1)
                </option>
                <option value="Differential Equations">
                  Differential Equations (3+0)
                </option>
                <option value="Islamic Studies/Ethics">
                  Islamic Studies/Ethics (3+0)
                </option>
                <option value="Communication & Presentation Skills">
                  Communication &amp; Presentation Skills (2+1)
                </option>
                <option value="Data Structures">Data Structures (3+1)</option>
                <option value="Computer Org. and Assembly Language">
                  Computer Org. and Assembly Language (3+1)
                </option>
                <option value="Discrete Structures">
                  Discrete Structures (3+0)
                </option>
                <option value="Linear Algebra">Linear Algebra (3+0)</option>
                <option value="University Elective – I">
                  University Elective – I (3+0)
                </option>
                <option value="Database Systems">Database Systems (3+1)</option>
                <option value="Operating Systems">
                  Operating Systems (3+1)
                </option>
                <option value="Design & Analysis of Algorithms">
                  Design &amp; Analysis of Algorithms (3+0)
                </option>
                <option value="Probability & Statistics">
                  Probability &amp; Statistics (3+0)
                </option>
                <option value="University Elective – II">
                  University Elective – II (3+0)
                </option>
                <option value="Theory of Automata">
                  Theory of Automata (3+0)
                </option>
                <option value="Computer Networks">
                  Computer Networks (3+1)
                </option>
                <option value="Software Design and Analysis">
                  Software Design and Analysis (3+0)
                </option>
                <option value="Technical & Business Writing">
                  Technical &amp; Business Writing (3+0)
                </option>
                <option value="Numerical Computing">
                  Numerical Computing (3+0)
                </option>
                <option value="Software Engineering">
                  Software Engineering (3+0)
                </option>
                <option value="Parallel & Distributed Computing">
                  Parallel &amp; Distributed Computing (3+0)
                </option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence (3+1)
                </option>
                <option value="CS Elective I">CS Elective I (3+0)</option>
                <option value="CS Supporting Elective">
                  CS Supporting Elective (3+0)
                </option>
                <option value="Final Year Project-I">
                  Final Year Project-I (0+3)
                </option>
                <option value="Information Security">
                  Information Security (3+0)
                </option>
                <option value="Professional Practices">
                  Professional Practices (3+0)
                </option>
                <option value="CS Elective II">CS Elective II (3+0)</option>
                <option value="CS Elective – III">
                  CS Elective – III (3+0)
                </option>
                <option value="Final Year Project-II">
                  Final Year Project-II (0+3)
                </option>
                <option value="University Elective – III">
                  University Elective – III (3+0)
                </option>
                <option value="CS Elective IV">CS Elective IV (3+0)</option>
                <option value="CS Elective V">CS Elective V (3+0)</option>
                <option value="CS Elective VI">CS Elective VI</option>
                <option value="None">None</option>
              </select>
              <select
                id="option"
                name="option"
                className="tm-input"
                required
                style={{ color: "orange" }}
                value={cityy}
                onChange={(e) => setcityy(e.target.value)}
              >
                <option value="" disabled>
                  Select Your Campus
                </option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Chiniot-Faisalabad">Chiniot-Faisalabad</option>
              </select>
              <textarea
                id="message"
                name="message"
                rows={2}
                style={{ color: "orange" }}
                placeholder="Drop Your Question Here"
                className="tm-input"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div>
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "orange",
                    width: "90%",
                  }}
                  type="submit"
                  className="btn tm-btn-submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container tm-container-contact">
          <div className="row">
            <div className="text-center col-12">
              <br></br>
              <h2 className="tm-section-title mb-4" style={{ color: "white" }}>
                Ask From Fast NU Students:
              </h2>
              <p className="mb-5" style={{ color: "white" }}>
                Select Your Preferences and Drop a Question, Fast Nu Respectice
                Teachers will Provide You With Best Answers/Solutions<br></br>
              </p>
              <br />
            </div>
            <form onSubmit={askstudents}>
              <textarea
                id="id"
                name="user id"
                rows={2}
                style={{ color: "orange" }}
                placeholder="Drop Student's Id here"
                className="tm-input"
                required
                value={useridd}
                onChange={(e) => setuseridd(e.target.value)}
              />
              <textarea
                id="message"
                name="message"
                rows={2}
                style={{ color: "orange" }}
                placeholder="Drop Your Message Here,They will Contact You"
                className="tm-input"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div>
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "orange",
                    width: "90%",
                  }}
                  type="submit"
                  className="btn tm-btn-submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <footer
            className="bg-secondary pt-4"
            style={{ backgroundColor: "rgb(225, 161, 76)" }}
          >
            <div className="container">
              <div className="row py-4">
                <div className="col-lg-3 col-12 align-left">
                  <a className="navbar-brand" href="index.html">
                    <i className="bx bx-buildings bx-sm text-light" />
                    <span className="text-light h5">Fast NUCES</span>{" "}
                    <span className="text-light h5 semi-bold-600">
                      Help Desk
                    </span>
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
                  <h3 className="h4 pb-lg-3 text-light light-300">
                    Our Company
                  </h3>
                  <ul className="list-unstyled text-light light-300">
                    <li className="pb-2">
                      <i className="bx-fw bx bxs-chevron-right bx-xs" />
                      <a
                        className="text-decoration-none text-light"
                        href="index.html"
                      >
                        Home
                      </a>
                    </li>
                    <li className="pb-2">
                      <i className="bx-fw bx bxs-chevron-right bx-xs" />
                      <a
                        className="text-decoration-none text-light py-1"
                        href="about.html"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="pb-2">
                      <i className="bx-fw bx bxs-chevron-right bx-xs" />
                      <a
                        className="text-decoration-none text-light py-1"
                        href="work.html"
                      >
                        Work
                      </a>
                    </li>
                    <li className="pb-2">
                      <i className="bx-fw bx bxs-chevron-right bx-xs" />
                      <a
                        className="text-decoration-none text-light py-1"
                        href="contact.html"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                  <h2 className="h4 pb-lg-3 text-light light-300">
                    For Client
                  </h2>
                  <ul className="list-unstyled text-light light-300">
                    <li className="pb-2">
                      <i className="bx-fw bx bx-phone bx-xs" />
                      <a
                        className="text-decoration-none text-light py-1"
                        href="tel:010-020-0340"
                      >
                        03004934903
                      </a>
                    </li>
                    <li className="pb-2">
                      <i className="bx-fw bx bx-mail-send bx-xs" />
                      <a
                        className="text-decoration-none text-light py-1"
                        href="mailto:info@company.com"
                      >
                        info@company.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <div className="w-100 bg-primary py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-lg-6 col-sm-12">
                  <p className="text-lg-start text-center text-light light-300"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer
          className="bg-secondary pt-4"
          style={{ backgroundColor: "rgb(225, 161, 76)" }}
        >
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
                <h3 className="h4 pb-lg-3 text-light light-300">Our Company</h3>
                <ul className="list-unstyled text-light light-300">
                  <li className="pb-2">
                    <i className="bx-fw bx bxs-chevron-right bx-xs" />
                    <a
                      className="text-decoration-none text-light"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="pb-2">
                    <i className="bx-fw bx bxs-chevron-right bx-xs" />
                    <a
                      className="text-decoration-none text-light py-1"
                      href="about.html"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="pb-2">
                    <i className="bx-fw bx bxs-chevron-right bx-xs" />
                    <a
                      className="text-decoration-none text-light py-1"
                      href="work.html"
                    >
                      Work
                    </a>
                  </li>
                  <li className="pb-2">
                    <i className="bx-fw bx bxs-chevron-right bx-xs" />
                    <a
                      className="text-decoration-none text-light py-1"
                      href="contact.html"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                <h2 className="h4 pb-lg-3 text-light light-300">For Client</h2>
                <ul className="list-unstyled text-light light-300">
                  <li className="pb-2">
                    <i className="bx-fw bx bx-phone bx-xs" />
                    <a
                      className="text-decoration-none text-light py-1"
                      href="tel:010-020-0340"
                    >
                      03004934903
                    </a>
                  </li>
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
        </footer>
        <div className="w-100 bg-primary py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-lg-6 col-sm-12">
                <p className="text-lg-start text-center text-light light-300"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
    </>
  );
}
