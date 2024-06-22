import React, { useState } from "react";

export default function Swaps() {
  const [cemail, setcemail] = useState(""); // Define cemail state and its setter
  const [ccourses, setccourses] = useState(""); // Define ccourses state and its setter
  const [cformm, setcformm] = useState(""); // Define cformm state and its setter
  const [ctext, setctext] = useState(""); // Define ctext state and its setter
  const [field, setfield] = useState(""); // Define dformm state and its setter

  const ondelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/deleteswap/${ccourses}/${field}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log success message
      } else {
        console.error("Error deleting record:", response.statusText);
        // Handle error case
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle fetch error
      // Optionally display error message to the user
    }
  };

  const oncollect = async (e) => {
    window.location.href = `http://localhost:8000/searchswap/${field}`;
    e.preventDefault();
    console.log({
      course: ccourses,
      current: cformm,
      destination: ctext,
      field: field,
    });

    try {
      const response = await fetch("http://localhost:8000/swap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: ccourses,
          current: cformm,
          destination: ctext,
          field: field,
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
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-youtube" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg bg-light shadow-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              src="images/logo.png"
              className="logo img-fluid"
              alt="Kind Heart Charity"
            />
            <span>
              Help You Find Your Best Section
              <small>Easy Swappers Available</small>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
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
        </div>
      </nav>
      <main>
        <section className="hero-section hero-section-full-height">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12 p-0">
                <div
                  id="hero-slide"
                  className="carousel carousel-fade slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/slide/volunteer-helping-with-donation-box.jpg"
                        className="carousel-image img-fluid"
                        alt="..."
                      />
                      <div className="carousel-caption d-flex flex-column justify-content-end">
                        <h1>Find A Swap</h1>
                        <p>Select Courses In Which You want Swap</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                        className="carousel-image img-fluid"
                        alt="..."
                      />
                      <div className="carousel-caption d-flex flex-column justify-content-end">
                        <h1>Find Best Swap</h1>
                        <p>Select Sections In Which You want Swap</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/slide/medium-shot-people-collecting-donations.jpg"
                        className="carousel-image img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#hero-slide"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#hero-slide"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 text-center mx-auto">
                <h2 className="mb-5">
                  Welcome To The Only Section Swapper Source
                </h2>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0"
                style={{ marginLeft: "300px" }}
              >
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" className="d-block">
                    <img
                      src="images/icons/hands.png"
                      className="featured-block-image img-fluid"
                      alt=""
                    />
                    <p className="featured-block-text">
                      Benefit from your <strong>Right</strong>
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <a href="donate.html" className="d-block">
                    <img
                      src="images/icons/heart.png"
                      className="featured-block-image img-fluid"
                      alt=""
                    />
                    <p className="featured-block-text">
                      We <strong>Care </strong>for your choices
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding section-bg" id="section_2">
          <div className="container" style={{ marginLeft: "220px" }}>
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                <img
                  src="images/group-people-volunteering-foodbank-poor-people.jpg"
                  className="custom-text-box-image img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="custom-text-box mb-lg-0">
                      <h5 className="mb-3">Our Mission</h5>
                      <p>Our Goal is Just to :</p>
                      <ul className="custom-list mt-2">
                        <li className="custom-list-item d-flex">
                          <i className="bi-check custom-text-box-icon me-2" />
                          Provide you Opportunity to study from your favourite
                          student.
                        </li>
                        <li className="custom-list-item d-flex">
                          <i className="bi-check custom-text-box-icon me-2" />
                          Resolve your timetable issues due to some
                          Circumstances
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="col-md-6" style={{ marginTop: "20px" }}>
          <h2 style={{ color: "black", marginLeft: 430 }}>Check_Availablity</h2>
          <br />
          <div
            className="contact-form"
            style={{ marginLeft: "350px", width: "550px", height: "620px" }}
          >
            <div className="row">
              <form
                onSubmit={oncollect}
                id="contact"
                style={{ minHeight: "280px" }}
                action=""
                value={cemail}
                onChange={(e) => setcemail(e.target.value)}
                method="post"
              >
                <div className="row">
                  <div className="col-md-12">
                    <fieldset>
                      <select
                        name="courses"
                        className="form-control"
                        id="courses"
                        value={ccourses}
                        onChange={(e) => setccourses(e.target.value)}
                        required=""
                        style={{
                          height: "calc(5.25rem + 2px)",
                          fontSize: "1.3rem",
                          marginBottom: 30,
                        }}
                      >
                        <option value="" disabled="" selected="">
                          Select a course
                        </option>
                        <option value="Introduction to ICT">
                          Introduction to ICT (0+1)
                        </option>
                        <option value="Programming Fundamentals">
                          Programming Fundamentals (3+1)
                        </option>
                        <option value="Applied Physics">
                          Applied Physics (3+0)
                        </option>
                        <option value="Calculus & Analytical Geometry">
                          Calculus &amp; Analytical Geometry (3+0)
                        </option>
                        <option value="Pakistan Studies">
                          Pakistan Studies (3+0)
                        </option>
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
                        <option value="Data Structures">
                          Data Structures (3+1)
                        </option>
                        <option value="Computer Org. and Assembly Language">
                          Computer Org. and Assembly Language (3+1)
                        </option>
                        <option value="Discrete Structures">
                          Discrete Structures (3+0)
                        </option>
                        <option value="Linear Algebra">
                          Linear Algebra (3+0)
                        </option>
                        <option value="University Elective – I">
                          University Elective – I (3+0)
                        </option>
                        <option value="Database Systems">
                          Database Systems (3+1)
                        </option>
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
                        <option value="CS Elective I">
                          CS Elective I (3+0)
                        </option>
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
                        <option value="CS Elective II">
                          CS Elective II (3+0)
                        </option>
                        <option value="CS Elective – III">
                          CS Elective – III (3+0)
                        </option>
                        <option value="Final Year Project-II">
                          Final Year Project-II (0+3)
                        </option>
                        <option value="University Elective – III">
                          University Elective – III (3+0)
                        </option>
                        <option value="CS Elective IV">
                          CS Elective IV (3+0)
                        </option>
                        <option value="CS Elective V">
                          CS Elective V (3+0)
                        </option>
                        <option value="CS Elective VI">CS Elective VI</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="formm"
                        type="text"
                        value={cformm}
                        onChange={(e) => setcformm(e.target.value)}
                        className="form-control"
                        id="destination"
                        placeholder="Current Course Section (Write in Form: 4A1)"
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="message"
                        type="text"
                        value={ctext}
                        onChange={(e) => setctext(e.target.value)}
                        className="form-control"
                        id="message"
                        placeholder="Destination Course Section (Write in Form: 4A1)"
                        required=""
                        defaultValue={""}
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <select
                      name="formm"
                      className="formm"
                      id="formm"
                      value={field}
                      onChange={(e) => setfield(e.target.value)}
                      required=""
                      style={{
                        height: "calc(5.25rem + 1px)",
                        width: "100%",
                        fontSize: "1.23rem",
                        marginBottom: 30,
                      }}
                    >
                      <option value="" disabled="" selected="">
                        Select Your Discipline
                      </option>
                      <option value="Bscs">Bs-cs</option>
                      <option value="Bsse">Bs-se</option>
                      <option value="Bba">Bs-bba</option>
                      <option value="Civil">Bs-civil</option>
                      <option value="Elect">Bs-electrical</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="btn">
                        Find Swap
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <br></br>
        <div className="col-md-6" style={{ marginTop: "20px" }}>
          <h2 style={{ color: "black", marginLeft: 430 }}>
            Delete_If_You've<br></br>Found_A_Swap
          </h2>
          <br />
          <div
            className="contact-form"
            style={{ marginLeft: "350px", width: "550px", height: "450px" }}
          >
            <div className="row">
              <form
                onSubmit={ondelete}
                id="contact"
                style={{ minHeight: "280px" }}
                action=""
                method="post"
              >
                <div className="row">
                  <div className="col-md-12">
                    <fieldset>
                      <select
                        name="courses"
                        className="form-control"
                        id="courses"
                        value={ccourses}
                        onChange={(e) => setccourses(e.target.value)}
                        required=""
                        style={{
                          height: "calc(5.25rem + 2px)",
                          fontSize: "1.3rem",
                          marginBottom: 30,
                        }}
                      >
                        <option value="" disabled="" selected="">
                          Select a course
                        </option>
                        <option value="Introduction to ICT">
                          Introduction to ICT (0+1)
                        </option>
                        <option value="Programming Fundamentals">
                          Programming Fundamentals (3+1)
                        </option>
                        <option value="Applied Physics">
                          Applied Physics (3+0)
                        </option>
                        <option value="Calculus & Analytical Geometry">
                          Calculus &amp; Analytical Geometry (3+0)
                        </option>
                        <option value="Pakistan Studies">
                          Pakistan Studies (3+0)
                        </option>
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
                        <option value="Data Structures">
                          Data Structures (3+1)
                        </option>
                        <option value="Computer Org. and Assembly Language">
                          Computer Org. and Assembly Language (3+1)
                        </option>
                        <option value="Discrete Structures">
                          Discrete Structures (3+0)
                        </option>
                        <option value="Linear Algebra">
                          Linear Algebra (3+0)
                        </option>
                        <option value="University Elective – I">
                          University Elective – I (3+0)
                        </option>
                        <option value="Database Systems">
                          Database Systems (3+1)
                        </option>
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
                        <option value="CS Elective I">
                          CS Elective I (3+0)
                        </option>
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
                        <option value="CS Elective II">
                          CS Elective II (3+0)
                        </option>
                        <option value="CS Elective – III">
                          CS Elective – III (3+0)
                        </option>
                        <option value="Final Year Project-II">
                          Final Year Project-II (0+3)
                        </option>
                        <option value="University Elective – III">
                          University Elective – III (3+0)
                        </option>
                        <option value="CS Elective IV">
                          CS Elective IV (3+0)
                        </option>
                        <option value="CS Elective V">
                          CS Elective V (3+0)
                        </option>
                        <option value="CS Elective VI">CS Elective VI</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <select
                      name="formm"
                      className="formm"
                      id="formm"
                      value={field}
                      onChange={(e) => setfield(e.target.value)}
                      required=""
                      style={{
                        height: "calc(5.25rem + 1px)",
                        width: "100%",
                        fontSize: "1.23rem",
                        marginBottom: 30,
                      }}
                    >
                      <option value="" disabled="" selected="">
                        Select Your Discipline
                      </option>
                      <option value="Bscs">Bs-cs</option>
                      <option value="Bsse">Bs-se</option>
                      <option value="Bba">Bs-bba</option>
                      <option value="Civil">Bs-civil</option>
                      <option value="Elect">Bs-electrical</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="btn">
                        Delete Swap
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4">
              <img src="images/logo.png" className="logo img-fluid" alt="" />
            </div>

            <div className="col-lg-4 col-md-6 col-12 mx-auto">
              <h5 className="site-footer-title mb-3">Contact Infomation</h5>
              <p className="text-white d-flex mb-2">
                <i className="bi-telephone me-2" />
                <a href="tel: 120-240-9600" className="site-footer-link">
                  XXXXXXXX
                </a>
              </p>
              <p className="text-white d-flex">
                <i className="bi-envelope me-2" />
                <a
                  href="mailto:info@yourgmail.com"
                  className="site-footer-link"
                >
                  fAST HELP DESK
                </a>
              </p>
              <p className="text-white d-flex mt-3">
                <i className="bi-geo-alt me-2" />
                PAKISTAN
              </p>
              <a href="#" className="custom-btn btn mt-3">
                THANKS
              </a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 col-12">
                <p className="copyright-text mb-0">
                  Copyright © 2036 <a href="#">Kind Heart</a> Charity Org.
                  Design:
                  <a href="https://templatemo.com" target="_blank">
                    TemplateMo
                  </a>
                </p>
              </div>
              <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                <ul className="social-icon">
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-twitter" />
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-facebook" />
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-instagram" />
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-linkedin" />
                  </li>
                  <li className="social-icon-item">
                    <a
                      href="https://youtube.com/templatemo"
                      className="social-icon-link bi-youtube"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* JAVASCRIPT FILES */}
    </>
  );
}
